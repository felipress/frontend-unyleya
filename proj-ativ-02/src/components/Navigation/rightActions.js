import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar'

const RightActions = () => {
    return (
        <div className="items right">
            <SearchBar />
            <Link to="/profile" className="item profile-button">
                <i className="material-symbols-outlined">person</i>
            </Link>
        </div>
    )
}

export default RightActions