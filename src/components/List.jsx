import { Table, TableBody } from '@material-ui/core';

function List(props) {
  const { children, ...rest } = props;
  return (
    <Table {...rest}>
      <TableBody>{children}</TableBody>
    </Table>
  );
}

export default List;
