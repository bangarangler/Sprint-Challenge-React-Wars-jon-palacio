import React from 'react';
import "./StarWars.css";

const CharacterCard = props => {
  return (
    <div className="container">
      <div className="nameStyle">
        <h2>{props.character.name}</h2>
      </div>
      <div className="attr">
    <p>{props.character.gender}</p>
    <p>{props.character['birth_year']}</p>
    <p>{props.character['hair_color']}</p>
    </div>
    </div>
  )
}

export default CharacterCard;