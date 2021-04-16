import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  Link,
  Typography,
} from '@material-ui/core';
import ReceiptIcon from '@material-ui/icons/Receipt';
import { useAuth } from 'hooks';
import { Logo, NavSection, Scrollbar } from 'components';
import { Home } from 'components/icons';

const sections = [
  {
    title: 'Geral',
    items: [
      {
        title: 'Home',
        path: '/home',
        icon: <Home />,
      },
    ],
  },
];

function Sidebar(props) {
  const { onMobileClose, openMobile } = props;
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Scrollbar options={{ suppressScrollX: true }}>
        <Hidden lgUp>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              p: 2,
            }}
          >
            <RouterLink to='/'>
              <Logo
                sx={{
                  height: 40,
                  width: 40,
                }}
              />
            </RouterLink>
          </Box>
        </Hidden>
        <Box sx={{ p: 2 }}>
          {sections.map((section) => (
            <NavSection
              key={section.title}
              pathname={location.pathname}
              sx={{
                '& + &': {
                  mt: 3,
                },
              }}
              {...section}
            />
          ))}
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Typography color='textPrimary' variant='subtitle2'>
            Precisa de ajuda?
          </Typography>
          <Typography color='textSecondary' variant='body2'>
            Entre em contato
          </Typography>
          <Button
            color='primary'
            component={RouterLink}
            fullWidth
            sx={{ mt: 2 }}
            to='/suporte'
            variant='contained'
          >
            Suporte
          </Button>
        </Box>
      </Scrollbar>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor='left'
          onClose={onMobileClose}
          open={openMobile}
          PaperProps={{
            sx: {
              backgroundColor: 'background.paper',
              width: 280,
            },
          }}
          variant='temporary'
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor='left'
          open
          PaperProps={{
            sx: {
              backgroundColor: 'background.paper',
              height: 'calc(100% - 64px) !important',
              top: '64px !Important',
              width: 280,
            },
          }}
          variant='persistent'
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
}

Sidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

export default Sidebar;
