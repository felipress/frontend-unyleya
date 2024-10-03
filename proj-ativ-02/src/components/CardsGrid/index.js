import Card from "../Card"
import "./cardsgrid.css"

const CardsGrid = ({data}) => {
    return (
        <div className="CardsGrid">
            {data.map((movie, key) => {
                return <Card title={movie.title} thumbnail={movie.thumbnail} link={movie.link} key={key} />
            })}
        </div>
    )
}

export default CardsGrid