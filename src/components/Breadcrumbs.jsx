import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Breadcrumbs as MuiBreadcrumbs, Link } from '@material-ui/core';
import { ChevronRight } from 'components/icons';

function Breadcrumbs(props) {
  const { paths } = props;
  return (
    <MuiBreadcrumbs
      aria-label='breadcrumb'
      separator={<ChevronRight fontSize='small' />}
      sx={{ mt: 1 }}
    >
      {paths.map((path) => (
        <Link color='textPrimary' variant='subtitle2' component={RouterLink} to={path.to}>
          {path.text}
        </Link>
      ))}
    </MuiBreadcrumbs>
  );
}

Breadcrumbs.propTypes = {
  paths: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      text: PropTypes.string,
    })
  ).isRequired,
};

export default Breadcrumbs;
