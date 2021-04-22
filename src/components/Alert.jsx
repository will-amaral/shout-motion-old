import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Alert as MuiAlert, AlertTitle } from '@material-ui/lab';

const Alert = forwardRef((props, ref) => {
  const { title, description } = props;
  return (
    <MuiAlert
      ref={ref}
      severity='info'
      variant='filled'
      sx={{ width: 500, backgroundColor: 'primary.main' }}
    >
      <AlertTitle>{title}</AlertTitle>
      {description}
    </MuiAlert>
  );
});

Alert.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Alert;
