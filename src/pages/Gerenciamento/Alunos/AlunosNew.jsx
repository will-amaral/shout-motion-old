import { Wrapper, Header, Breadcrumbs } from 'components';

function AlunosNew() {
  return (
    <Wrapper title='Novo Aluno | ShoutMotion'>
      <Header title='Novo Aluno' overline='Alunos'>
        <Breadcrumbs
          paths={[
            { to: '/home', text: 'Home' },
            { to: '/alunos', text: 'Alunos' },
            { to: '/alunos/novo', text: 'Novo' },
          ]}
        />
      </Header>
    </Wrapper>
  );
}

export default AlunosNew;
