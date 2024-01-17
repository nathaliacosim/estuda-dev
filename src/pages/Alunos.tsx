import PageContainer from "../components/PageContainer";
import Paper from "../components/Paper";

function Alunos() {
  return (
    <PageContainer>
      <Paper>
        <div className="students">
          <h3>Alunos e Seus Planos de Aulas!</h3>
          <br />          
          <a className="btn btn-blue text-center" href="/programacao-basica">Aulas Thiago</a>
        </div>
      </Paper>
    </PageContainer>
  );
}

export default Alunos;
