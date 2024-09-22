import{ useState } from 'react';
import PropTypes from 'prop-types';

const TeamButton = ({ teamName, disabled }) => {
  const [score, setScore] = useState(0);

  const handleClick = () => {
    const newScore = score + 1;
    setScore(newScore);
    
  };

  return (
    <div>
      <h2>{teamName}: {score}</h2>
      <button onClick={handleClick} disabled={disabled}>
        Adicionar Gol
      </button>
    </div>
  );
};

TeamButton.propTypes = {
  teamName: PropTypes.string.isRequired,
  updateScore: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default TeamButton;
