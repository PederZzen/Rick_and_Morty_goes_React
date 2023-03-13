/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ character }) => {
    return (
        <Link className="characterItem" to={`/character/${character.id}`}>
            <div>
                <h2>{character.name}</h2>
            </div>
            <img src={character.image} alt={`An image of ${character.name}`}></img>
        </Link>
    )
}
export default Item