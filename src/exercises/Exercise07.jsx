import PerguntaResposta from "../components/PerguntaResposta";
const Exercise07 = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <PerguntaResposta 
        pergunta="O que é um 'SyntheticEvent'?" 
        resposta="é um tipo de evento usado no React e em outras bibliotecas para lidar com interações do usuário tipo cliques ou digitações." 
      />
    </div>
  );
};


export default Exercise07;
