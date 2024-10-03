import LinkButton from "../Form/LinkButton"
import "./featuredTitle.css"

const FeaturedTitle = ({title, description, thumbnail, link}) => {
    return (
        <section className="featured-title">
            <div className="featured-image">
                <img alt="featured-image" src={thumbnail} />
            </div>
            <div className="title-details">
                <h3 className="title">{title}</h3>
                <div className="description">{description}</div>
                <div className="actions">
                    <LinkButton to={link + "/player"} styles="primary">Assistir agora</LinkButton>
                    <LinkButton to={link} styles="secondary inverted">
                        <i className="material-symbols-outlined">info</i>
                    </LinkButton>
                    <LinkButton styles="secondary inverted">
                        <i className="material-symbols-outlined">favorite</i>
                    </LinkButton>
                </div>
            </div>
        </section>
    )
}
export default FeaturedTitle