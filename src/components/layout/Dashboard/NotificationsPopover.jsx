import { useRef, useState } from 'react';
import {
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Popover,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { Alert } from 'components';
import { Bell, Chat } from 'components/icons';
import { useSnackbar } from 'notistack';
import { useNotification } from 'hooks';

function NotificationsPopover() {
  const { notifications, markAllAsRead, markAsRead } = useNotification();
  const { enqueueSnackbar } = useSnackbar();
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const openNotification = (notification) => {
    const { title, description, id } = notification;
    enqueueSnackbar('', {
      content: <Alert title={title} description={description} />,
      anchorOrigin: {
        horizontal: 'center',
        vertical: 'top',
      },
    });
    markAsRead(id);
  };

  return (
    <>
      <Tooltip title='Notifications'>
        <IconButton color='inherit' ref={anchorRef} onClick={handleOpen}>
          <Badge color='error' badgeContent={notifications.length}>
            <Bell fontSize='small' />
          </Badge>
        </IconButton>
      </Tooltip>
      <Popover
        anchorEl={anchorRef.current}
        anchorOrigin={{
          horizontal: 'center',
          vertical: 'bottom',
        }}
        onClose={handleClose}
        open={open}
        PaperProps={{
          sx: { width: 320 },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography color='textPrimary' variant='h6'>
            Notificações
          </Typography>
        </Box>
        {notifications.length === 0 ? (
          <Box sx={{ p: 2 }}>
            <Typography color='textPrimary' variant='subtitle2'>
              Não existem notificações
            </Typography>
          </Box>
        ) : (
          <>
            <List disablePadding>
              {notifications.map((notification) => {
                return (
                  <ListItem
                    divider
                    key={notification.id}
                    button
                    onClick={() => openNotification(notification)}
                  >
                    <ListItemAvatar>
                      <Avatar
                        sx={{
                          backgroundColor: 'primary.main',
                          color: 'primary.contrastText',
                        }}
                      >
                        <Chat fontSize='small' />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={notification.title}
                      secondary={notification.description}
                    />
                  </ListItem>
                );
              })}
            </List>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                p: 1,
              }}
            >
              <Button color='primary' size='small' variant='text' onClick={markAllAsRead}>
                Marcar todas como lidas
              </Button>
            </Box>
          </>
        )}
      </Popover>
    </>
  );
}

export default NotificationsPopover;
