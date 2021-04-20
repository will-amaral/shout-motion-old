import PropTypes from 'prop-types';
import { Typography, getContrastRatio, alpha } from '@material-ui/core';

function Label(props) {
  const { children, color } = props;
  const textColor =
    getContrastRatio(alpha(color, 0.8), '#fff') >= 3 ? '#fff' : 'rgba(0, 0, 0, 0.87)';

  return (
    <Typography
      variant='overline'
      sx={{
        color: textColor,
        backgroundColor: alpha(color, 0.8),
        padding: '0 1rem',
        borderRadius: 0.5,
        fontWeight: '700',
        border: `2px solid ${color}`,
      }}
    >
      {children}
    </Typography>
  );
}

Label.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
};

export default Label;
