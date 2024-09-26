import "./style.css"
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <h1>Minha página de login</h1>
            <Link to="/">Acessar homepage</Link>
        </div>
    )
}

export default Login