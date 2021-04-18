import { Wrapper, Header, Breadcrumbs, Table } from 'components';

const rows = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'XGrid', col2: 'is Awesome' },
  { id: 3, col1: 'Material-UI', col2: 'is Amazing' },
];

const columns = [
  { field: 'col1', headerName: 'Column 1', flex: 1 },
  { field: 'col2', headerName: 'Column 2', flex: 1 },
];

function AlunosList() {
  return (
    <Wrapper title='Alunos | ShoutMotion'>
      <Header title='Alunos'>
        <Breadcrumbs
          paths={[
            { to: '/home', text: 'Home' },
            { to: '/alunos', text: 'Alunos' },
          ]}
        />
      </Header>
      <Table rows={rows} columns={columns} />
    </Wrapper>
  );
}

export default AlunosList;
