import React, { createContext, useState } from "react";

export const DarkModeContext = createContext({});

const DarkModeContextProvider = ({children}) => {

    const [isModeDark, setIsModeDark] = useState(false);


    
    const state = {isModeDark, setIsModeDark};

    return(
        <DarkModeContext.Provider value={state}>
            {children}
        </DarkModeContext.Provider>
    )
}

export default DarkModeContextProvider