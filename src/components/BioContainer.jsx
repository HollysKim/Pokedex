import { useState } from "react";
import NavBar from "./NavBar";
import Default from "./Default";
import Moves from "./Moves";
import Abilities from "./Abilities";

const BioContainer = ({ name, moves, abilities, types, id, pokemonImg }) => {
  const [navBarOption, setNavBarOption] = useState("default");
  return (
    <div key={id} className='bio-container'>
      <NavBar setNavBarOption={setNavBarOption} />
      {navBarOption == "default" ? (
        <Default name={name} pokemonImg={pokemonImg} types={types} id={id} />
      ) : navBarOption == "abilities" ? (
        <Abilities abilities={abilities} />
      ) : (
        <Moves moves={moves} />
      )}
    </div>
  );
};

export default BioContainer;
