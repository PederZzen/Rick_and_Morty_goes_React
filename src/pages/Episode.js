import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../utils/Constants'

const Episode = () => {

    const [episode, setEpisode] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const fetchEpisode = async () => {
            fetch(BASE_URL + "/episode/" + id)
                .then((res => res.json()))
                .then((data => setEpisode(data)))
        }
        fetchEpisode()
    }, [])

    if (!episode) {
        return <p>No data</p>
    }

    return (
        <div>
            <h1>{episode.name}</h1>
            <h2>{episode.episode}</h2>
            <h3>Air date</h3>
            <p>{episode.air_date}</p>
        </div>
    )
}

export default Episode
