import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Characters from './pages/Characters'
import Character from './pages/Character'
import Episodes from './pages/Episodes'
import Episode from './pages/Episode'
import Locations from './pages/Locations'
import Nav from './components/global/Nav'
import Location from './pages/Location'

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
