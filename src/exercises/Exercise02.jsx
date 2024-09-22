
const Exercise02 = () => {
    const handleClick = () => {
        alert('Você clicou no botão!');
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Exercise 02</h1>
            <p>Content for Exercise02</p>
            <button onClick={handleClick}>Clique aqui!</button>
        </div>
    );
};

export default Exercise02;
