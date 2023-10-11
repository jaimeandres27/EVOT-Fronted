import { createContext, useContext, useState } from "react";


const IntitutionsContext = createContext();

export function useInstitutionsContext() {
    return useContext(IntitutionsContext)
}

export const InsitutionsProvider = ({ children }) => {

    const [institutions, setInstitutions ] = useState(null);

    return (
        <IntitutionsContext.Provider value={{ institutions, setInstitutions }} >
            {children}
        </IntitutionsContext.Provider>
    )

}