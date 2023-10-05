
import React from 'react'

import { useAuth } from '../context/AuthContext'

const AdminDashboard = () => {

    const { authUser,
        setAuthUser,
        isloggedIn,
        setIsLoggedIn } = useAuth();

    const LogIn = (e) => {
        e.preventDefault();
        setIsLoggedIn(true)
        setAuthUser({
            name: "Daniel"
        })
    }
    const LogOut = (e) => {
        e.preventDefault();
        setIsLoggedIn(false)
        setAuthUser(null)
    }

    return (
        <>
            <h1  className='py-10'>AdminDashboard</h1>
            {
                isloggedIn
                    ?
                    (
                        <>
                            <h1>{authUser.name}</h1>
                            <button onClick={(e) => { LogOut(e) }}> Log Out</button>
                        </>
                    )
                    :
                    (
                        <>
                            <h1> User Logged Out</h1>
                            <button onClick={(e) => { LogIn(e) }}> Log In</button>
                        </>
                    )
            }
        </>
    );

}

export default AdminDashboard;