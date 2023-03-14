/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { EpiContext } from '../../context/EpisodeContext'
import { BASE_URL } from '../../utils/Constants'
import Item from '../episodes/Item'
import './index.scss'

const Character = () => {

  const { id } = useParams();
  const [char, setChar] = useState(null);
  const { episode, setEpisode } = useContext(EpiContext);
  const [epiWithChar, setEpiWithChar] = useState([])

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const res = await fetch(`${BASE_URL}/character/${id}`);
        const data = await res.json()
        setChar(data)
        setEpisode(data.episode);
      }
      catch (err) {
        console.error(err);
      }
    }

    fetchCharacter()

  }, [id, setEpisode])

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const res = await fetch(`${BASE_URL}/episode/${episode.map((e) => {
          return e.slice(40)
        })}`)
        const data = await res.json()
        setEpiWithChar(data)
      }
      catch (err) {
        console.error(err);
      }
    }
    
    if (episode) {
      fetchEpisodes()
    }

  }, [episode])
  
  if (!char) {
    return <p>No data..</p>
  }

  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='left'>
          <h1>{char.name}</h1>
          <div>
            <img 
              src={char.image} 
              alt={`An image of ${char.name}`}>
            </img>
          </div>
          <div className='details'>
            <h2>Details</h2>
            <p>
              {char.species}
              {char.type ? ` (${ char.type })` : ""}
              {char.gender !== "unknown" ? ` - ${char.gender}` : ""}
            </p>
            <p className={char.status === "Alive" ? "alive" : "dead"}>{char.status !== "unknown" ? char.status : ""}</p>
            <h3>Location</h3>
            <p>{char.location.name}</p>
            <h3>Origin</h3>
            <p>{char.origin.name}</p>
          </div>
        </div>
        <div className='right'>
          <h2>Appeared on ({char.episode.length})</h2>
          <ul>
            {epiWithChar.length > 1 ? epiWithChar.map((e, idx) => {
              return <Item key={idx} episode={e}>{e.name}</Item>
            }) : "" }
            {epiWithChar ? <Item key={epiWithChar.id} episode={epiWithChar}>{epiWithChar.name}</Item> : "No data"}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Character
