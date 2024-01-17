import PageContainer from "../components/PageContainer";
import Paper from "../components/Paper";

function Aula0() {
  return (
    <PageContainer>
      <Paper>
        <div className="aulas">
          <h3>Bem vindo a Aula 0!</h3>
          <br />
          <div>
            <p>Hoje você irá aprender IF/ELSE em PYTHON!!!</p>
            <br />
            <p>1° Passo:</p>
            <br />
            <a
              className="btn btn-blue-dark text-center"
              href="https://docs.google.com/document/d/1gmBuvhijLxTCv0r5TpVx_JAuT8_D_AT9XCWe56-Fb8U/edit?usp=sharing"
              target="_blank"
            >
              Acesse aqui o material de apoio!
            </a>
            <br />
            <br />
            <p>2° Passo:</p>
            <br />
            <a
              className="btn btn-blue-dark text-center"
              href="https://docs.google.com/document/d/1dy6_qPtF0PA-BCiroRTMzoIxAGHptZyO/edit?usp=sharing&ouid=101986603137018460000&rtpof=true&sd=true"
              target="_blank"
            >
              Acesse aqui os exercicios práticos!
            </a>
            <br />
            <br />
            <p>3° Passo:</p>
            <br />
            <a
              className="btn btn-blue-dark text-center"
              href="https://docs.google.com/document/d/1VGM20tYtigI83FgpZRpKOXwfRXkD5okO/edit?usp=sharing&ouid=101986603137018460000&rtpof=true&sd=true"
              target="_blank"
            >
              Acesse aqui a revisão teórica!
            </a>
            <br />
            <br />
            <p>4° Passo:</p>
            <br />
            <p>
              Identifique os pontos em que teve dificuldades durante a resolução
              dos problemas e faça anotações sobre o que precisa revisar. :)
            </p>
          </div>
          <br />
          <br />
          <br />
          <a className="btn btn-blue text-center" href="/programacao-basica">
            Voltar
          </a>
        </div>
      </Paper>
    </PageContainer>
  );
}

export default Aula0;
