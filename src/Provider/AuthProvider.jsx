import { onAuthStateChanged, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';




export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const updateUser = (updatedUser) => {
        return updateProfile(auth.currentUser, updatedUser)
    }

    const [user, setUser] = useState({
        // name: 'Mahiya Rahman',
        // email: 'habibaislammim@gmail.com'
    })
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }


    }, [])





    const authData = {
        user,
        setUser,
        updateUser
    }

    return (
        <div>
            <AuthContext value={authData}>{children}</AuthContext>

        </div>
    );
};

export default AuthProvider;
