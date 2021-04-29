import PropTypes from 'prop-types';
import { TableRow, TableCell, Typography } from '@material-ui/core';

function ListItem(props) {
  const { header, value } = props;
  return (
    <TableRow>
      <TableCell>
        <Typography color='textPrimary' variant='subtitle2'>
          {header}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography color='textSecondary' variant='body2'>
          {value}
        </Typography>
      </TableCell>
    </TableRow>
  );
}

ListItem.propTypes = {
  header: PropTypes.string,
  value: PropTypes.string,
};

export default ListItem;
