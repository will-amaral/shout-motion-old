import { cloneElement, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Dialog, DialogTitle } from '@material-ui/core';

function ConfirmDialog(props) {
  const { buttonProps, title, children } = props;
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen} {...buttonProps} />
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby='confirmation-dialog-title'
        aria-describedby='confirmation-dialog-description'
      >
        <DialogTitle id='confirmation-dialog-title'>{title}</DialogTitle>
        {cloneElement(children, { close: handleClose })}
      </Dialog>
    </>
  );
}

ConfirmDialog.propTypes = {
  button: PropTypes.object,
  title: PropTypes.string,
};

export default ConfirmDialog;
