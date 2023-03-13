import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import { letterEffect } from '../effects/letterEffect'

const Nav = () => {
  return (
    <nav>
      <Link onMouseEnter={letterEffect} data-value="Home" to="/">Home</Link>
      <Link onMouseEnter={letterEffect} data-value="Characters" to="characters">Characters</Link>
      <Link onMouseEnter={letterEffect} data-value="Episodes" to="episodes">Episodes</Link>
      <Link onMouseEnter={letterEffect} data-value="Locations" to="locations">Locations</Link>
    </nav>
  )
}

export default Nav
