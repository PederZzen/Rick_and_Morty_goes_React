/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom'

const CharacterItem = ({ character }) => {
    return (
        <div>
            <Link to={`/character/${character.id}`}>
                <p>{character.name}</p>
                <img src={character.image} alt={`An image of ${character.name}`}></img>
            </Link>
        </div>
    )
}
export default CharacterItem