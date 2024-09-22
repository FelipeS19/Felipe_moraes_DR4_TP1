import { useState } from 'react';
import PropTypes from 'prop-types';

const PerguntaResposta = ({ pergunta, resposta }) => {
  const [mostrarResposta, setMostrarResposta] = useState(false);

  const toggleResposta = () => {
    setMostrarResposta(!mostrarResposta);
  };

  return (
    <div className="pergunta-resposta">
      <div className="pergunta">
        <h2>{pergunta}</h2>
      </div>
      <button className="toggle-button" onClick={toggleResposta}>
        {mostrarResposta ? 'Ocultar Resposta' : 'Mostrar Resposta'}
      </button>
      {mostrarResposta && (
        <div className="resposta">
          <p>{resposta}</p>
        </div>
      )}
    </div>
  );
};

PerguntaResposta.propTypes = {
  pergunta: PropTypes.string.isRequired,
  resposta: PropTypes.string.isRequired,
};

export default PerguntaResposta;
