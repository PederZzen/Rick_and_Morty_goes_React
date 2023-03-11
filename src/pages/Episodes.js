import React, { useContext, useEffect } from 'react'
import EpisodeItem from '../components/items/EpisodeItem'
import { EpiContext } from '../context/EpisodeContext'
import { BASE_URL } from '../utils/Constants'

const Episodes = () => {
  const {episode, setEpisode} = useContext(EpiContext)

  useEffect(() => {
    const fetchEpisodes = async () => {
      fetch(BASE_URL + "/episode" )
        .then((res => res.json()))
        .then((data => {
          console.log(data);
          setEpisode(data.results)
        }))
    }
    fetchEpisodes()
  }, [])

  return (
    <div>
      <h1>Episodes</h1>
      {episode ? episode.map((e, idx) => {
        return <EpisodeItem key={idx} episode={e}>{e.name}</EpisodeItem>
      }) : "No data"}
    </div>
  )
}

export default Episodes
