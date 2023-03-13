import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../utils/Constants'

const Location = () => {
    
    const [location, setLocation] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const fetchLocation = async () => {
            fetch(BASE_URL + "/location/" + id)
                .then((res => res.json()))
                .then((data => setLocation(data)))
        }
        fetchLocation()
    }, [])

    if (!location) {
        return <p>No data</p>
    }

    return (
        <div>
            <h1>{location.name}</h1>
            <h2>{location.type}</h2>
        </div>
    )
}

export default Location
