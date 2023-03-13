import React, { useContext, useEffect, useReducer, useState } from 'react'
import Item from './Item'
import { EpiContext } from '../../context/EpisodeContext'
import { BASE_URL } from '../../utils/Constants'
import reducer from '../../components/pagination'

const initialState = { page: 1 }

const Episodes = () => {
  const {episode, setEpisode} = useContext(EpiContext)
  const [state, dispatch] = useReducer(reducer, initialState)
  const [totalPages, setTotalPages] = useState("")

  useEffect(() => {
    const fetchEpisodes = async () => {
      fetch(`${BASE_URL}/episode/?page=${state.page}` )
        .then((res => res.json()))
        .then((data => {
          setTotalPages(data.info.pages)
          setEpisode(data.results)
        }))
    }
    fetchEpisodes()
  }, [state.page])

  return (
    <div>
      <h1>Episodes</h1>
      <p>Page {state.page} of {totalPages}</p>
      <button onClick={() => dispatch({type:"previous"})}>Previous Page</button>
      <button onClick={() => dispatch({type:"next"})}>Next Page</button>
      {episode ? episode.map((e, idx) => {
        return <Item key={idx} episode={e}>{e.name}</Item>
      }) : "No data"}
    </div>
  )
}

export default Episodes
