import PerguntaResposta from '../components/PerguntaResposta';
const Exercise06 = () => {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <PerguntaResposta 
          pergunta="Qual é a diferença de passar o 'handleClick' e chamar o 'handleClick'?" 
          resposta="Passar handleClick permite que o evento seja tratado no momento da interação porem chamar handleClick ativa a função sem esperar pelo evento." 
        />
      </div>
    );
  };
  

export default Exercise06;
