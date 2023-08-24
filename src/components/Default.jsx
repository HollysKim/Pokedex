const Default = ({ name, pokemonImg, types, id }) => {
  return (
    <div>
      <h1>#{id}</h1>
      <h1 key={name}>{name}</h1>
      <img className='pokemonImg' src={pokemonImg}></img>
      <div className='icon-container'>
        {types.map((types) => (
          <img
            className={`icon-img ${types.type.name}`}
            src={`/src/assets/${types.type.name}.svg`}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default Default;
