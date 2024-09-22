import { useState } from 'react';
import TeamButton from '../components/teambutton';

const Exercise04 = () => {
  const [scores, setScores] = useState({
    TeamA: 0,
    TeamB: 0,
  });
  
  const [gameEnded, setGameEnded] = useState(false);

  const updateScore = (teamName, newScore) => {
    setScores((prevScores) => ({
      ...prevScores,
      [teamName]: newScore,
    }));
  };

  const endGame = () => {
    setGameEnded(true);
  };

  const getWinner = () => {
    if (scores.TeamA > scores.TeamB) return "Time A";
    if (scores.TeamB > scores.TeamA) return "Time B";
    return "Empate";
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Placar do Jogo</h1>
      <TeamButton 
        teamName="Time A" 
        updateScore={(score) => updateScore("TeamA", score)} 
        disabled={gameEnded} 
      />
      <TeamButton 
        teamName="Time B" 
        updateScore={(score) => updateScore("TeamB", score)} 
        disabled={gameEnded} 
      />
      <h2>Placar Final:</h2>
      <h3>Vencedor: {gameEnded ? getWinner() : "Jogo em andamento"}</h3>

      <button onClick={endGame} disabled={gameEnded}>
        Fim de Jogo
      </button>
    </div>
  );
};

export default Exercise04;
