import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export function useAuth(){
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(null);
    const [isloggedIn, setIsLoggedIn] = useState(false);

    const value = {
        authUser,
        setAuthUser,
        isloggedIn,
        setIsLoggedIn
    }

    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    )
}