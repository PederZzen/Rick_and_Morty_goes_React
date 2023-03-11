import React, { useContext, useEffect } from 'react'
import { BASE_URL } from '../utils/Constants'
import { CharContext } from '../context/CharacterContext'
import CharacterItem from '../components/items/CharacterItem'

const Characters = () => {
  const {char, setChar} = useContext(CharContext)

  useEffect(() => {
    const fetchCharacters = async () => {
      fetch(BASE_URL + "/character")
        .then((res => res.json()))
        .then((data => {
          console.log(data);
          setChar(data.results)
        }))
    }
    fetchCharacters()
  
  }, [])

  return (
    <div>
      <h1>Characters</h1>
      {char ? char.map((e, idx) => {
        return <CharacterItem key={idx} character={e}>{e.name}</CharacterItem>
      }) : "No data" }
    </div>
  )
}

export default Characters
