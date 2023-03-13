import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="characters">Characters</Link>
      <Link to="episodes">Episodes</Link>
      <Link to="locations">Locations</Link>
    </nav>
  )
}

export default Nav
