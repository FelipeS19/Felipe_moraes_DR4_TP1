import PerguntaResposta from "../components/PerguntaResposta";
const Exercise12 = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Exercise 12</h1>
      <PerguntaResposta 
        pergunta="O que são hooks? Cite exemplos de uso." 
        resposta="Hooks são funções que permitem usar estado e outras características do React em componentes funcionais tipo: useState, useEffect." 
      />
    </div>
  );
};

export default Exercise12;
