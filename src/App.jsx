import { useEffect, useState } from "react";
import BioContainer from "./components/BioContainer";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  const [pokemonData, setPokemonData] = useState(null);
  const [id, setID] = useState(null);
  const [abilities, setAbilities] = useState(null);
  const [types, setTypes] = useState(null);
  const [moves, setMoves] = useState(null);
  const [name, setName] = useState(null);
  const [pokemonImg, setPokemonImg] = useState(null);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const getData = async (e) => {
    try {
      e.preventDefault();
      const formData = e.target.name.value;
      setLoading(true);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${formData.toLowerCase()}`
      );
      const data = await response.json();
      let camelCaseName =
        data.name.charAt(0).toUpperCase() + data.name.slice(1);
      let datamoves = data.moves.map(
        (moves) =>
          moves.move.name.charAt(0).toUpperCase() + moves.move.name.slice(1)
      );
      let dataabilities = data.abilities.map(
        (abilities) =>
          abilities.ability.name.charAt(0).toUpperCase() +
          abilities.ability.name.slice(1)
      );
      setPokemonImg(data.sprites.other["official-artwork"].front_default);
      setID(data.id);
      setAbilities(dataabilities);
      setTypes(data.types);
      setMoves(datamoves);
      setName(camelCaseName);
      setPokemonData(data);
      setErr(null);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setErr(`"${e.target.name.value}" cannot be found.`);
    }
  };

  const randomPokemon = async () => {
    let num = Math.floor(Math.random() * 1010);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
    const data = await response.json();
    let camelCaseName = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    let datamoves = data.moves.map(
      (moves) =>
        moves.move.name.charAt(0).toUpperCase() + moves.move.name.slice(1)
    );
    let dataabilities = data.abilities.map(
      (abilities) =>
        abilities.ability.name.charAt(0).toUpperCase() +
        abilities.ability.name.slice(1)
    );
    setPokemonImg(data.sprites.other["official-artwork"].front_default);
    setID(data.id);
    setAbilities(dataabilities);
    setTypes(data.types);
    setMoves(datamoves);
    setName(camelCaseName);
    setPokemonData(data);
    setErr(null);
    setLoading(false);
  };

  return (
    <div className='parent-container'>
      <div className='form-container'>
        <Form getData={getData} />
        <button className='randomBtn' onClick={() => randomPokemon()}>
          I'm feeling lucky
        </button>
      </div>
      {err === null ? (
        pokemonData !== null ? (
          loading ? (
            <h1 style={{ textAlign: "center" }}>Loading...</h1>
          ) : (
            <BioContainer
              name={name}
              moves={moves}
              abilities={abilities}
              types={types}
              id={id}
              pokemonImg={pokemonImg}
              loading={loading}
            />
          )
        ) : null
      ) : (
        <h1 style={{ textAlign: "center", color: "red" }}>{err}</h1>
      )}
      <Footer />
    </div>
  );
}

export default App;
