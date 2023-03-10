import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Character from './pages/Character'
import Contact from './pages/Contact'
import About from './pages/About'
import Nav from './components/global/Nav'

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="character/:id" element={<Character />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </>
  )
}

export default App
