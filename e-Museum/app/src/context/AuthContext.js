import { createContext, useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"

const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [userLogged, setUserLogged] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo")
        if(userInfo){
            setUserLogged(true)
        }
        else{
            navigate("/login")
        }
    }, [])

    const login = async (credentials) => {
        const response = await fetch("http://localhost:5000/auth/login", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(credentials)
        })
        const data = await response.json()

        localStorage.setItem("userInfo", JSON.stringify(data))
        navigate("/")
        setUserLogged(true)
    }

    const logout = () => {
        setUserLogged(false)
        localStorage.clear()
        navigate("/login")
    }

    return (
        <AuthContext.Provider value={{userLogged, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}