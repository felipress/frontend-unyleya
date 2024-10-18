import { createContext, useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import {loginService} from "../services/auth.service"
import { findUserById } from "../services/profile.service"
import api from "../services/api"

const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [userLogged, setUserLogged] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo")
        if(userInfo){
            setUserLogged(true)
            // api.defaults.headers.common['Authorization'] = `Bearer ${userInfo.token}`
        }
        else{
            navigate("/login")
        }
    }, [])

    const login = async (credentials) => {
        const response = await loginService(credentials)
        const data = await response.data

        localStorage.setItem("userInfo", JSON.stringify(data))
        // api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
        navigate("/")
        setUserLogged(true)
    } 

    const logout = () => {
        setUserLogged(false)
        localStorage.clear()
        navigate("/login")
    }

    const findUser = async () => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"))
        const response = await findUserById(userInfo.userId)
        // return await response.data
    }

    return (
        <AuthContext.Provider value={{userLogged, login, logout, findUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}