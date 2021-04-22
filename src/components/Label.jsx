import { Typography } from '@material-ui/core';

function Label(props) {
  const { children } = props;

  return (
    <Typography
      variant='overline'
      sx={{
        color: '#fff',
        backgroundColor: 'primary.main',
        padding: '0 1rem',
        borderRadius: 0.5,
        fontWeight: '700',
      }}
    >
      {children}
    </Typography>
  );
}

export default Label;
