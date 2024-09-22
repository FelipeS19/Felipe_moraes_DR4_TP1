import PerguntaResposta from "../components/PerguntaResposta";
const Exercise15 = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Exercise 15</h1>
      <PerguntaResposta 
        pergunta="Qual é a função do useMemo?" 
        resposta="useMemo é um hook que memoriza valores calculados, evitando re-cálculos desnecessários entre renderizações." 
      />
    </div>
  );
};

export default Exercise15;
