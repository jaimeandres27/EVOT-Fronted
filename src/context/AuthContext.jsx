import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

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

    useEffect(() => {
        // Simulate an asynchronous check for authentication
        const checkAuthStatus = () => {
            const token = localStorage.getItem('token');
            setIsLoggedIn(!!token); // Update the authentication status based on the presence of a token
        };

        checkAuthStatus();
    }, []);

    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    )
}