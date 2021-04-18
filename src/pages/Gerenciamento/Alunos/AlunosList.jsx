import { Wrapper, Header, Breadcrumbs } from 'components';

function AlunosList() {
  return (
    <Wrapper>
      <Header title='Alunos'>
        <Breadcrumbs
          paths={[
            { to: '/home', text: 'Home' },
            { to: '/alunos', text: 'Alunos' },
          ]}
        />
      </Header>
    </Wrapper>
  );
}

export default AlunosList;
