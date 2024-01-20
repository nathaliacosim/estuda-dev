import PageContainer from "../components/PageContainer";
import Paper from "../components/Paper";

function ProgramacaoBasica() {
  return (
    <PageContainer>
      <Paper>
        <div className="aulas">
          <h3>Aulas Disponíveis!</h3>
          <br />
          <div className="app-center">
            <a className="btn btn-blue-dark text-center w150" href="/aula0">
              Aula 0
            </a>
            <a className="btn btn-orange text-center w150" href="/aula1">
              Aula 1
            </a>
          </div>
          
          <br />
          <a className="btn btn-blue w150 text-center" href="/alunos">
            Voltar
          </a>
        </div>
      </Paper>
    </PageContainer>
  );
}

export default ProgramacaoBasica;
