import CardsGrids from "../CardsGrid"
import "./categoryTitles.css"

const CategoryTitles = ({movies, children}) => {
    return (
        <section className="CategoryTitles">
            <h4 className="title">{children}</h4>
            <CardsGrids data={movies}></CardsGrids>
        </section>
    )
}

export default CategoryTitles