import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(null);
    const [isloggedIn, setIsLoggedIn] = useState(false);

    console.log(isloggedIn);
    console.log(authUser);

    return (
        <AuthContext.Provider value={{authUser,  setAuthUser, isloggedIn, setIsLoggedIn}} >
            {children}
        </AuthContext.Provider>
    )
}