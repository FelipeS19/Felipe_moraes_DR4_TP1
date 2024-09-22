import { useEffect } from 'react';
const Exercise11 = () => {
  useEffect(() => {
    alert('Componente renderizado uma vez!');
  }, []); 
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Exercise 11</h1>
      <p>Veja o alert uma vez!</p>
    </div>
  );
};

export default Exercise11;
