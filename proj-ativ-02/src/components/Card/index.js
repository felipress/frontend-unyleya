import { Link } from "react-router-dom"
import "./card.css"

const Card = ({title, thumbnail, link}) => {
    return (
        <div className="Card">
            <Link to={link}>
                <figure>
                    <i className="material-symbols-outlined">play_circle</i>
                    <img src={thumbnail} alt="Capa do filme" />
                </figure>
                <h5 className="movie-title">{title}</h5>
            </Link>
        </div>
    )
}

export default Card