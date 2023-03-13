import React, { useContext, useEffect, useReducer, useRef, useState } from 'react'
import { BASE_URL } from '../../utils/Constants'
import { CharContext } from '../../context/CharacterContext'
import Item from './Item'
import reducer from '../../components/pagination/Index'


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
      <h1>Characters</h1>
      <div>
        <input type="text" placeholder='Search for character' onChange={(e) => setSearch(e.target.value)}></input>
      </div>
      <button onClick={() => dispatch({type:"previous"})}>Previous Page</button>
      <button onClick={() => dispatch({type:"next"})}>Next Page</button>
      <p>Page {state.page} of {totalPages}</p>
      <div className='characterList'>
        {char ? char.map((e, idx) => {
          return <Item key={idx} character={e}>{e.name}</Item>
        }) : "No data" }
      </div>
    </div>
  )
}

export default Characters
