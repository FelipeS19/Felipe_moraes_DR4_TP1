import PerguntaResposta from "../components/PerguntaResposta";
const Exercise13 = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Exercise 13</h1>
      <PerguntaResposta 
        pergunta="Qual é a função do useState?" 
        resposta="useState é um hook que permite adicionar estado a componentes funcionais, permitindo que o estado seja mantido entre renderizações." 
      />
    </div>
  );
};

export default Exercise13;
