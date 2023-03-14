import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../utils/Constants'
import Item from '../../components/characters/Item'
import { CharContext } from '../../context/CharacterContext'
import { EpiContext } from '../../context/EpisodeContext'

const Episode = () => {

    const { id } = useParams()
    const {episode, setEpisode} = useContext(EpiContext)
    const {char, setChar} = useContext(CharContext)
    const [charInEp, setCharInEp] = useState(null)

    useEffect(() => {
        const fetchEpisode = async () => {
            try {
                const res = await fetch(`${BASE_URL}/episode/${id}`)
                const data = await res.json()
                setEpisode(data)
                setChar(data.characters);
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
                const res = await fetch(`${BASE_URL}/character/${char.map((e) => {
                    return e.slice(42)
                })}`)
                const data = await res.json()
                setCharInEp(data)
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
                {charInEp ? charInEp.map((e, idx) => {
                    return <Item key={idx} character={e}>{}e</Item> 
                }) : "No data"}

            </ul>
        </div>
    )
}

export default Episode
