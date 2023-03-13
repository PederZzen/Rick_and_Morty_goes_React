/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ character }) => {
    return (
        <div>
            <Link to={`/character/${character.id}`}>
                <h2>{character.name}</h2>
                <img src={character.image} alt={`An image of ${character.name}`}></img>
            </Link>
        </div>
    )
}
export default Item