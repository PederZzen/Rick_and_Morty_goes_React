/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../utils/Constants'

const Character = () => {

  const [char, setChar] = useState(null)
  const [episodes, setEpisodes] = useState(null)
  const [episode, setEpisode] = useState({})
  const { id } = useParams()

  // useEffect(() => {
  //   const fetchEpisodes = async () => {
  //     fetch(`${BASE_URL}/episode/${[episodes]}`)
  //       .then((res => res.json()))
  //       .then((data => {
  //         console.log(data);
  //         // setEpisode(data)
  //       }))
  //   }

  //   const fetchCharacter = async () => {
  //     fetch(BASE_URL + "/character/" + id)
  //      .then((res => res.json()))
  //      .then((data => {
  //       setChar(data)
  //       setEpisodes(data.episode.map((e) => {
  //         return (e.slice(-2));
  //       }))
  //       fetchEpisodes()
  //     }))
  //   }
  //   fetchCharacter()
  // },[])

  useEffect(() => {
    async function fetchCharacter () {
      const response = await fetch(BASE_URL + "/character/" + id)
      const data = await response.json()
      console.log(data);
      setChar(data)
      setEpisodes(data.episode.map((e) => {
        return (e.slice(-2));
      }))

      if(data) {
        const response2 = await fetch(`${BASE_URL}/episode/${[episodes]}`)
        const data2 = await response2.json()
        console.log(data2);
      }
    }
    fetchCharacter()
  },[])

  if (!char) {
    return <p>No data..</p>
  }

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
      <ul>

      </ul>
    </div>
  )
}

export default Character
