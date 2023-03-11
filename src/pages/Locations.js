import React, { useContext, useEffect } from 'react'
import LocationItem from '../components/items/LocationItem'
import { LocaContext } from '../context/LocationContext'
import { BASE_URL } from '../utils/Constants'

const Locations = () => {

  const {location, setLocation} = useContext(LocaContext)
  
  useEffect(() => {
    const fetchLocations = async () => {
      fetch(BASE_URL + "/location")
        .then((res => res.json()))
        .then((data => setLocation(data.results)))
    }
    fetchLocations()
  }, [])

  return (
    <div>
      {location ? location.map((e, idx) => {
        return <LocationItem key={idx} location={e}>{e.name}</LocationItem>
      }) : "No data"}
    </div>
  )
}

export default Locations
