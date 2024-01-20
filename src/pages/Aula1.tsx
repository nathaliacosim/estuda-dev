import Cronometer from "../components/Cronometer";
import PageContainer from "../components/PageContainer";
import Paper from "../components/Paper";

function Aula1() {
  return (
    <PageContainer>
      <Paper>
        <div className="aulas">
          <Cronometer />
          <h3>Bem vindo a Aula 1!</h3>
          <br />
          <div>
            <p>Hoje você irá aprender IF/ELSE em PYTHON!!!</p>
            <br />

            <p>1° Passo:</p>
            <br />
            <a
              className="btn btn-orange text-center"
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
              className="btn btn-orange text-center"
              href="https://docs.google.com/document/d/1IWtVm_vgu-mzVAg84RdeREF2XQUyWAEw/edit?usp=sharing&ouid=101986603137018460000&rtpof=true&sd=true"
              target="_blank"
            >
              Acesse aqui os exercicios práticos!
            </a>
            <br />
            <br />
            <p>3° Passo:</p>
            <br />
            <a
              className="btn btn-orange text-center"
              href="https://docs.google.com/document/d/17KZrt30vQWaTNBxrH0FlGZ1vdEP5bxyq/edit?usp=sharing&ouid=101986603137018460000&rtpof=true&sd=true"
              target="_blank"
            >
              Acesse aqui a revisão teórica!
            </a>
            <br />
            <br />
            <p>4° Passo:</p>
            <br />
            <a
              className="btn btn-orange text-center"
              href="https://drive.google.com/drive/folders/1zcfgPNDlaOotrHxaVrrOuIw77RMO7dYz?usp=sharing"
              target="_blank"
            >
              Faça upload dos exercícios nesta pasta do drive!
            </a>
            <br />
            <br />
            <p>5° Passo:</p>
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

export default Aula1;
