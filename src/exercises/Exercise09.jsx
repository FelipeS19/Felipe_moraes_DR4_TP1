import PerguntaResposta from "../components/PerguntaResposta";

const Exercise09 = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Exercise 09</h1>
      <PerguntaResposta 
        pergunta="Quais são as desvantagens de se colocar funções de seta inline para o tratamento de eventos?" 
        resposta="Colocar funções de seta inline para eventos deixa mais lento o app porque toda vez que a página é atualizada cria uma versão nova da função, além de dificultar o teste do código." 
      />
    </div>
  );
};

export default Exercise09;
