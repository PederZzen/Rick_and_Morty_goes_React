import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../utils/Constants'

const Character = () => {

  const [char, setChar] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchCharacter = async () => {
      fetch(BASE_URL + "/character/" + id)
       .then((res => res.json()))
       .then((data => setChar(data)))
    }
    fetchCharacter()
  },[])

  if (!char) {
    return <p>No data..</p>
  }

  return (
    <div>
      <h1>{char.name}</h1>
    </div>
  )
}

export default Character
