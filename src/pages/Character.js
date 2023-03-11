/* eslint-disable jsx-a11y/img-redundant-alt */
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

  console.log(char);

  return (
    <div>
      <h1>{char.name}</h1>
      <img 
        src={char.image} 
        alt={`An image of ${char.name}`}>
      </img>
      <h2>Details</h2>
      <p>
        {char.species}
        {char.type ? ` (${ char.type })` : ""}
        {char.gender !== "unknown" ? ` - ${char.gender}` : ""}
      </p>
      <p>{char.status !== "unknown" ? char.status : ""}</p>
      <h3>Location</h3>
      <p>{char.location.name}</p>
      <h3>Origin</h3>
      <p>{char.origin.name}</p>
      <h3>Appeared on</h3>

    </div>
  )
}

export default Character
