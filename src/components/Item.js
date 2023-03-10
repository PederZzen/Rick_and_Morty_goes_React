import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ character }) => {
    return (
        <li>
            <Link to={`/character/${character.id}`}>{character.name}</Link>
        </li>
    )
}
export default Item