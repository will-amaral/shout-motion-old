import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';

function Header(props) {
  const { overline, title, children, action } = props;
  return (
    <Grid sx={{ mb: 3 }} container justifyContent='space-between' spacing={3}>
      <Grid item>
        {overline && (
          <Typography color='textSecondary' variant='overline'>
            {overline}
          </Typography>
        )}
        <Typography color='textPrimary' variant='h5'>
          {title}
        </Typography>
        {children}
      </Grid>
      <Grid item>{action}</Grid>
    </Grid>
  );
}

Header.propTypes = {
  overline: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  action: PropTypes.node,
};

export default Header;
