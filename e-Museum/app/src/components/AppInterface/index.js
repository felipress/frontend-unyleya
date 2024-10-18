import { useContext } from "react"
import Navigation from "../Navigation"
import { AuthContext } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"

const AppInterface = ({title, children}) => {
    const navigate = useNavigate()
    const userLogged = useContext(AuthContext)

    if(userLogged){
        return (
            <div className="AppUI">
                <Navigation />
                <main className="sticky mt-20 bg-white max-w-screen-xl mx-auto px-8 py-4 rounded-xl">
                    <h1 className="font-bold text-3xl mt-2 mb-6 pb-7 border-b border-gray-200 text-gray-800">{title}</h1>
                    {children}
                </main>
            </div>
        )
    }
    return (
        <div>You must be logged</div>
    )
}

export default AppInterface