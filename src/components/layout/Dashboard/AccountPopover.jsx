import { useRef, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  CircularProgress,
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Popover,
  Typography,
} from '@material-ui/core';
import { useAuth } from 'hooks';
import { Cog, User } from 'components/icons';

const AccountPopover = () => {
  const anchorRef = useRef(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      handleClose();
      await logout();
      navigate('/');
    } catch (err) {
      console.error(err);
      enqueueSnackbar('Impossível deslogar', {
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'top',
        },
        variant: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box
        component={ButtonBase}
        onClick={handleOpen}
        ref={anchorRef}
        sx={{
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <Avatar
          src={user.avatar}
          sx={{
            height: 32,
            width: 32,
          }}
        />
      </Box>
      <Popover
        anchorEl={anchorRef.current}
        anchorOrigin={{
          horizontal: 'center',
          vertical: 'bottom',
        }}
        getContentAnchorEl={null}
        keepMounted
        onClose={handleClose}
        open={open}
        PaperProps={{
          sx: { width: 240 },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography color='textPrimary' variant='subtitle2'>
            {user.name}
          </Typography>
          <Typography color='textSecondary' variant='subtitle2'>
            {user.role}
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ mt: 2 }}>
          <MenuItem component={RouterLink} to='/conta'>
            <ListItemIcon>
              <User fontSize='small' />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography color='textPrimary' variant='subtitle2'>
                  Conta
                </Typography>
              }
            />
          </MenuItem>
          <MenuItem component={RouterLink} to='/configuracoes'>
            <ListItemIcon>
              <Cog fontSize='small' />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography color='textPrimary' variant='subtitle2'>
                  Configurações
                </Typography>
              }
            />
          </MenuItem>
        </Box>
        <Box sx={{ p: 2 }}>
          <Button
            disabled={loading}
            startIcon={loading && <CircularProgress size={15} />}
            color='primary'
            fullWidth
            onClick={handleLogout}
            variant='outlined'
          >
            Sair
          </Button>
        </Box>
      </Popover>
    </>
  );
};

export default AccountPopover;
