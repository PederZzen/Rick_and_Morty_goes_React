import React, { useContext, useEffect } from 'react'
import { BASE_URL } from '../utils/Constants'
import { CharContext } from '../context/CharacterContext'
import Item from '../components/Item'

const Home = () => {

  const {char, setChar} = useContext(CharContext)

  useEffect(() => {
    const fetchAPI = async () => {
      fetch(BASE_URL + "/character")
        .then((res => res.json()))
        .then((data => {
          console.log(data);
          setChar(data.results)
        }))
    }
    fetchAPI()
  
  }, [])

  return (
    <div>
      <ul>
        {char ? char.map((e, idx) => {
          return <Item key={idx} character={e}>{e.name}</Item>
        }) : "No data" }
      </ul>
    </div>
  )
}

export default Home
