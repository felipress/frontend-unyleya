import './style.css'
import {Link} from 'react-router-dom'

const NavMenu = () => {
    return (
        <nav className="navmenu">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavMenu