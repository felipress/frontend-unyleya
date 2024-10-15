import { useContext } from "react"
import "./Home.css"
import { AuthContext } from "../../context/AuthContext"

const Home = () => {
    const userLogged = useContext(AuthContext)
    return (
        <div className="Home">
            Homepage {userLogged ? "Logado": "Não logado"}
        </div>
    )
}

export default Home