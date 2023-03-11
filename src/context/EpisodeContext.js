import { createContext, useState } from "react";

export const EpiContext = createContext()

const EpisodeContext = (props) => {
    const [episode, setEpisode] = useState(null)

    return (
        <EpiContext.Provider value={{episode, setEpisode}}>
            {props.children}
        </EpiContext.Provider>
    )
}

export default EpisodeContext