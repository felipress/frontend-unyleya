import Navigation from "../../components/Navigation"
import FeaturedTitle from "../../components/FeaturedTitle"
import "./home.css"

const Home = () => {
    const movie = {
        title: "Como eu era antes de você",
        thumbnail: "https://s2-gshow.glbimg.com/_QkIaMYq4Lx8R01Qi25L8E1-Y30=/0x0:1600x1065/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2021/b/G/GC1KnmSoCBLhHvm2sIGQ/como-eu-era-antes-de-voce-atores-mostra-amizade-em-fotos-divertidas-nos-bastidores-1-.jpg",
        description: "De origem modesta e sem grandes aspirações, a peculiar Louisa Clark é contratada para ser cuidadora de Will, um jovem tetraplégico depressivo e cínico.",
        link: "/title/12345/player"
    }
    return (
        <div className="Home navigation-fixed">
            <Navigation isLogged />
            <main>
                <FeaturedTitle title={movie.title} description={movie.description} thumbnail={movie.thumbnail} link={movie.link} />
                <section className="category-titles">
                    <h4 className="title">Sucesso de Bilheteria</h4>
                    <div className="grid">
                        <div className="card">
                            video
                        </div>
                        <div className="card">
                            video
                        </div>
                        <div className="card">
                            video
                        </div>
                        <div className="card">
                            video
                        </div>
                    </div>
                </section>
                <section className="category-titles">
                    <h4 className="title">Sucesso de Bilheteria</h4>
                    <div className="grid">
                        <div className="card">
                            video
                        </div>
                        <div className="card">
                            video
                        </div>
                        <div className="card">
                            video
                        </div>
                        <div className="card">
                            video
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home