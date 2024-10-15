import React, { createContext, useState } from "react"

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [userLogged, setUserLogged] = useState(false)

    const loginUser = async (inputs) => {
        const response = await fetch("http://localhost:3000/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json0"
            },
            body: JSON.stringify(inputs)
        })
        console.log(response)
        setUserLogged(true)
    }

    return (
        <AuthContext.Provider value={userLogged}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}