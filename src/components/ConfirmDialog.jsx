import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  CircularProgress,
} from '@material-ui/core';

function ConfirmDialog(props) {
  const {
    component: Component,
    title,
    description,
    confirmText,
    cancelText,
    confirmAction,
  } = props;
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onConfirm = async () => {
    setLoading(true);
    try {
      await confirmAction();
      handleClose();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <>
      <Component onClick={handleOpen} />
      <Dialog
        fullWidth
        maxWidth='xs'
        open={open}
        onClose={handleClose}
        aria-labelledby='confirmation-dialog-title'
        aria-describedby='confirmation-dialog-description'
      >
        <DialogTitle id='confirmation-dialog-title'>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id='confirmation-dialog-description'>
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color='error' onClick={handleClose}>
            {cancelText}
          </Button>
          <Button
            sx={{ color: 'text.primary' }}
            disabled={loading}
            onClick={onConfirm}
            autoFocus
            startIcon={loading && <CircularProgress />}
          >
            {confirmText}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

ConfirmDialog.propTypes = {
  component: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  confirmAction: PropTypes.func,
};

ConfirmDialog.defaultProps = {
  confirmText: 'Confirmar',
  cancelText: 'Cancelar',
  confirmAction: () => Promise.resolve(),
};

export default ConfirmDialog;
