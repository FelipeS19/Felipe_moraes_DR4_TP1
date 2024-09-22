const Exercise08 = () => {
  const handleClick = (event) => {
    console.log(event);
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Exercise 08</h1>
      <button onClick={(event) => handleClick(event)}>Mostrar SyntheticEvent</button>
    </div>
  );
};

export default Exercise08;
