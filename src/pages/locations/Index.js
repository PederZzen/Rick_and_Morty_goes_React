import React, { useContext, useEffect, useReducer, useState } from 'react'
import Item from './Item'
import { LocaContext } from '../../context/LocationContext'
import { BASE_URL } from '../../utils/Constants'
import reducer from '../../components/pagination/Index'

const initialState = { page: 1 }

const Locations = () => {

  const {location, setLocation} = useContext(LocaContext)
  const [state, dispatch] = useReducer(reducer, initialState)
  const [totalPages, setTotalPages] = useState("")
  
  useEffect(() => {
    const fetchLocations = async () => {
      fetch(`${BASE_URL}/location/?page=${state.page}`)
        .then((res => res.json()))
        .then((data => {
          setLocation(data.results)
          setTotalPages(data.info.pages)
        }))
    }
    fetchLocations()
  }, [state.page])

  return (
    <div>
      <h1>Locations</h1>
      <p>Page {state.page} of {totalPages}</p>
      <button onClick={() => dispatch({type: "previous"})}>Previous Page</button>
      <button onClick={() => dispatch({type: "next"})}>Next Page</button>
      {location ? location.map((e, idx) => {
        return <Item key={idx} location={e}>{e.name}</Item>
      }) : "No data"}
    </div>
  )
}

export default Locations
