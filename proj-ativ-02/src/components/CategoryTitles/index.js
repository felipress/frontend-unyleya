import CardsGrid from "../CardsGrid"
import "./categorytitles.css"

const CategoryTitles = ({movies, children}) => {
    return (
        <section className="CategoryTitles">
            <h4 className="title">{children}</h4>
            <CardsGrid data={movies}></CardsGrid>
        </section>
    )
}

export default CategoryTitles