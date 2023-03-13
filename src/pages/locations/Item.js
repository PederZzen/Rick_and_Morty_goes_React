import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ location }) => {
  return (
    <div>
      <Link to={`/location/${location.id}`}>
        <p>{location.name}</p>
      </Link>
    </div>
  )
}

export default Item
