/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { EpiContext } from '../../context/EpisodeContext'
import { BASE_URL } from '../../utils/Constants'

const Character = () => {

  const [char, setChar] = useState(null);
  const [episodes, setEpisodes] = useState(null);
  const { id } = useParams();
  const { episode, setEpisode } = useContext(EpiContext);
  
  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`${BASE_URL}/character/${id}`);
        const data = await response.json();
        setChar(data);
        setEpisode(data.episode.map((e) => e.slice(40)));
      } catch (error) {
        console.error(error);
      }
    };
    fetchCharacter();
    
  }, [id, setEpisode]);
  
  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await fetch(`${BASE_URL}/episode/${episode}`);
        const data = await response.json();
        setEpisodes(data);
      } catch (error) {
        console.error(error);
      }
    };
    if (episode) {
      fetchEpisodes();
    }
  }, [episode]);
  
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
      <h3>Appeared on ({char.episode.length})</h3>
      <ul>
        {episodes ? episodes.map((e, idx) => {
          return <li key={idx}>{e.name}</li>
        }) : "No data"}
      </ul>
    </div>
  )
}

export default Character
