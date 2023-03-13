import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './assets/global.scss'

import Home from './pages/home'
import Characters from './pages/characters'
import Character from './pages/character'
import Episodes from './pages/episodes'
import Episode from './pages/episode'
import Locations from './pages/locations'
import Nav from './components/nav'
import Location from './pages/location'

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="characters" element={<Characters />}></Route>
        <Route path="character/:id" element={<Character />}></Route>
        <Route path="episodes" element={<Episodes />}></Route>
        <Route path="episode/:id" element={<Episode />}></Route>
        <Route path="locations" element={<Locations />}></Route>
        <Route path="location/:id" element={<Location />}></Route>
      </Routes>
    </>
  )
}

export default App
