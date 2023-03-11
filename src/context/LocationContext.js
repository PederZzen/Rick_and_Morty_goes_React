import React, { createContext, useState } from 'react'

export const LocaContext = createContext()

const LocationContext = (props) => {

    const [location, setLocation] = useState(null)

    return (
        <LocaContext.Provider value={{location, setLocation}}>
            {props.children}
        </LocaContext.Provider>
    )
}

export default LocationContext
