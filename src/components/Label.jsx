import PropTypes from 'prop-types';
import { Typography, getContrastRatio } from '@material-ui/core';

function Label(props) {
  const { children, color } = props;
  const textColor = getContrastRatio(color, '#fff') >= 3 ? '#fff' : 'rgba(0, 0, 0, 0.87)';

  return (
    <Typography
      variant='overline'
      sx={{
        color: textColor,
        backgroundColor: color,
        padding: '0 1rem',
        borderRadius: 0.5,
        fontWeight: '700',
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
