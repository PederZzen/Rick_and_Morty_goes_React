import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Index'
import Characters from './pages/characters'
import Character from './pages/character'
import Episodes from './pages/episodes/Index'
import Episode from './pages/episode/Index'
import Locations from './pages/locations/Index'
import Nav from './components/nav/Index'
import Location from './pages/location/Index'

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
