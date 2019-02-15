import React from 'react';
import CharacterCard from "./CharacterCard";
import './StarWars.css';

const StarWarsContainer = props => {
  return (
    <div className="CharList">
      {props.characters.map(char => <CharacterCard character={char} key={char.created} />)}
    </div>
    
  )
}

export default StarWarsContainer;