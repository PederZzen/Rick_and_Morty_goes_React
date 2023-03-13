/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useReducer, useState } from 'react'
import { BASE_URL } from '../../utils/Constants'
import { CharContext } from '../../context/CharacterContext'
import './index.scss'
import reducer from '../../components/pagination'
import Item from '../../components/characters/Item'

const initialState = { page: 1 }

const Characters = () => {

  const {char, setChar} = useContext(CharContext)
  const [state, dispatch] = useReducer(reducer, initialState)
  const [totalPages, setTotalPages] = useState("")
  const [search, setSearch] = useState("")

  useEffect(() => {
    const fetchCharacters = async () => {
      fetch(`${BASE_URL}/character/?page=${state.page}&name=${search}`)
        .then((res => res.json()))
        .then((data => {
          setChar(data.results) 
          setTotalPages(data.info.pages)

        }))
    }
    fetchCharacters()
  
  }, [state.page, search])


  return (
    <div>
      <div className='header'>
        <h1>Characters</h1>
        <input type="text" placeholder='Search for character' onChange={(e) => setSearch(e.target.value)}></input>
        <p>Page <span>{state.page}</span> of <span>{totalPages}</span></p>
        <div className='buttons'>
          <button onClick={() => dispatch({type:"previous"})}>Previous Page</button>
          <button onClick={() => dispatch({type:"next"})}>Next Page</button>
        </div>
      </div>

      <div className='characterList'>
        {char ? char.map((e, idx) => {
          return <Item key={idx} character={e}>{e.name}</Item>
        }) : "No data" }
      </div>
    </div>
  )
}

export default Characters
