import { useMemo, useState } from 'react';
const Exercise16 = () => {
  const [count, setCount] = useState(0);

  const valorMemorizado = useMemo(() => {

    return count * 2; // Cálculo que será memorizado
  }, [count]);
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Exercise 16</h1>
      <p>Contagem: {count}</p>
      <p>Valor Memorizado: {valorMemorizado}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

export default Exercise16;
