import "./style.css"
import {Link} from "react-router-dom"

const Home = () => {
    return (
        <div>
            <h1>Homepage</h1>
            <a href="/login">Acesse sua conta</a>
            <br/>
            <Link to="/login">Acesse sua conta</Link>
        </div>
    )
}

export default Home