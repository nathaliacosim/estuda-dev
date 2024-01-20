import { useState, useEffect } from "react";

const Cronometer = () => {
  const [tempoTotal, setTempoTotal] = useState(0);
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [isContando, setIsContando] = useState(false);

  useEffect(() => {
    let intervalId: number | undefined;

    const contarTempo = () => {
      setTempoTotal((tempo) => tempo + 1);
    };

    const atualizarTempo = () => {
      const horasAtual = Math.floor(tempoTotal / 3600);
      const minutosAtual = Math.floor((tempoTotal % 3600) / 60);
      const segundosAtual = tempoTotal % 60;

      setHoras(horasAtual);
      setMinutos(minutosAtual);
      setSegundos(segundosAtual);
    };

    if (isContando) {
      intervalId = setInterval(() => {
        contarTempo();
        atualizarTempo();
      }, 1000);
    } else {
      if (intervalId !== undefined) {
        clearInterval(intervalId);
      }
    }

    // Limpa o intervalo ao desmontar o componente
    return () => {
      if (intervalId !== undefined) {
        clearInterval(intervalId);
      }
    };
  }, [isContando, tempoTotal]);

  const iniciarContagem = () => {
    setIsContando(true);
  };

  const pausarContagem = () => {
    setIsContando(false);
  };

  const reiniciarContagem = () => {
    setTempoTotal(0);
    setHoras(0);
    setMinutos(0);
    setSegundos(0);
    setIsContando(false);
  };


  const estiloTexto = minutos >= 40 ? { color: "red" } : ( minutos < 40 && minutos >= 30 ? { color : "orange" } : {} );

  return (
    <div className="text-center">
      <h1 style={estiloTexto}>
        {String(horas).padStart(2, "0")}:
        {String(minutos).padStart(2, "0")}:{String(segundos).padStart(2, "0")}
      </h1>
      <br />
      <div className="app-center">
        <button
          className="btn btn-green w150 text-center"
          onClick={iniciarContagem}
        >
          Iniciar
        </button>
        <button
          className="btn btn-green w150 text-center"
          onClick={pausarContagem}
        >
          Pausar
        </button>
        <button
          className="btn btn-green w150 text-center"
          onClick={reiniciarContagem}
        >
          Reiniciar
        </button>
      </div>

      <br />
      <br />
    </div>
  );
};

export default Cronometer;
