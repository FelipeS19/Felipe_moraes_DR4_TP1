import PerguntaResposta from '../components/PerguntaResposta';

const Exercise05 = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Exercise 05</h1>
      <PerguntaResposta 
        pergunta="Onde foi inventado o chuveiro elétrico?" 
        resposta="Brasil" 
      />
    </div>
  );
};

export default Exercise05;
