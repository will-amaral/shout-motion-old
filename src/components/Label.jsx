import { Typography } from '@material-ui/core';

function Label(props) {
  const { children } = props;

  return (
    <Typography
      variant='overline'
      sx={{
        color: '#fff',
        backgroundColor: 'secondary.main',
        py: 0.2,
        px: 2,
        borderRadius: 0.5,
        fontWeight: '700',
      }}
    >
      {children}
    </Typography>
  );
}

export default Label;
