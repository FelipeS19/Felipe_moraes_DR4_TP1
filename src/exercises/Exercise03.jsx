import{ useState } from 'react';

const Exercise03 = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Contador de Cliques</h1>
            <p>Número de cliques: {count}</p>
            <button onClick={handleClick}>Clique aqui!</button>
        </div>
    );
};

export default Exercise03;
