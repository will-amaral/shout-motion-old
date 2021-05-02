import { cloneElement, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Dialog, DialogTitle } from '@material-ui/core';

function Modal(props) {
  const { buttonProps, title, children } = props;
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen} {...buttonProps} />
      <Dialog
        fullWidth
        maxWidth='xs'
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

Modal.propTypes = {
  buttonProps: PropTypes.object,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Modal;
