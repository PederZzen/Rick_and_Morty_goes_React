import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({episode}) => {
    return (
        <div>
            <Link to={`/episode/${episode.id}`}>
                <p>{episode.episode} {episode.name}</p>
            </Link>
        </div>
    )
}

export default Item
