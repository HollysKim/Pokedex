const Abilities = ({ abilities }) => {
  return (
    <div className='abilities-container'>
      <div className='abilities-subcontainer'>
        {abilities.map((ability) => (
          <p>{ability}</p>
        ))}
      </div>
    </div>
  );
};

export default Abilities;
