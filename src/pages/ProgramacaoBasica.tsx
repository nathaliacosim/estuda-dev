import PageContainer from "../components/PageContainer";
import Paper from "../components/Paper";

function ProgramacaoBasica() {
  return (
    <PageContainer>
      <Paper>
        <div className="aulas">
          <h3>Aulas Disponíveis!</h3>
          <br />
          <div>
            <a className="btn btn-blue-dark text-center w400" href="/aula0">
              Conteúdos - Aula 0
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
