import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../utils/Constants'
import Item from '../../components/characters/Item'

const Episode = () => {

    const [episode, setEpisode] = useState(null)
    const [char, setChar] = useState(null)
    const [character, setCharacter] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const fetchEpisode = async () => {
            try {
                const response = await fetch(`${BASE_URL}/episode/${id}`)
                const data = await response.json()
                setEpisode(data)
                setChar(data.characters.map((e)=>{
                    return e.slice(42)
                }));
            }
            catch (error) {
                console.error(error);
            }
        }

        fetchEpisode()

    }, [id, setChar])

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch(`${BASE_URL}/character/${[char]}`)
                const data = await response.json()
                console.log(data);;
                setCharacter(data)
                console.log(data);
            }
            catch (error) {
                console.error(error);
            }
        }

        if (char) {
            fetchCharacters()
        }
        
    }, [char])

    if (!episode) {
        return <p>No data</p>
    }

    return (
        <div>
            <h1>{episode.name}</h1>
            <h2>{episode.episode}</h2>
            <h3>Air date</h3>
            <p>{episode.air_date}</p>
            <h3>Characters in the episode</h3>
            <ul>
                {character ? character.map((e, idx) => {
                    return <Item key={idx} character={e}>{e.name}</Item>
                }) : "No data"}
            </ul>
        </div>
    )
}

export default Episode
