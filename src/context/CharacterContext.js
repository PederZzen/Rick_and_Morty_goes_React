import React, { createContext, useState } from 'react'

export const CharContext = createContext()

const CharacterContext = (props) => {
    const [char, setChar] = useState(null)
    return (
        <CharContext.Provider value={{char, setChar}}>
            {props.children}
        </CharContext.Provider>
    )
}

export default CharacterContext
