const Form = ({ getData }) => {
  return (
    <div>
      <form onSubmit={getData}>
        <input
          id='input_text'
          name='name'
          type='text'
          placeholder='Enter a pokemon or ID'
        ></input>
      </form>
    </div>
  );
};

export default Form;
