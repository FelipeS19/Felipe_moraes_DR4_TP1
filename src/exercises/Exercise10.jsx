import { useEffect } from 'react';

const Exercise10 = () => {
    useEffect(() => {
      alert('Componente renderizado!');
    });

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Exercise 10</h1>
      <div>Veja o alert!</div>
    </div>
  );
};

export default Exercise10;
