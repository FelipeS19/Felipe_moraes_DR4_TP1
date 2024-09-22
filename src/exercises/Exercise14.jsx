import PerguntaResposta from "../components/PerguntaResposta";
const Exercise14 = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Exercise 14</h1>
      <PerguntaResposta 
        pergunta="Qual é a função do useEffect?" 
        resposta="useEffect é um hook que permite realizar efeitos colaterais em componentes funcionais, como chamadas de API ou manipulação de DOM." 
      />
    </div>
  );
};

export default Exercise14;
