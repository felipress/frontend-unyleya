import CategoryTitles from "../../components/CategoryTitles"
import FeaturedTitle from "../../components/FeaturedTitle"
import "./home.css"

const Home = () => {
    const movie = {
        title: "Como eu era antes de você",
        thumbnail: "https://s2-gshow.glbimg.com/_QkIaMYq4Lx8R01Qi25L8E1-Y30=/0x0:1600x1065/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2021/b/G/GC1KnmSoCBLhHvm2sIGQ/como-eu-era-antes-de-voce-atores-mostra-amizade-em-fotos-divertidas-nos-bastidores-1-.jpg",
        description: "De origem modesta e sem grandes aspirações, a peculiar Louisa Clark é contratada para ser cuidadora de Will, um jovem tetraplégico depressivo e cínico.",
        link: "/title/12345"
    }
    const movies = [
        {
            title: "A Cabana",
            thumbnail: "https://media.guiame.com.br/archives/2017/04/13/1269759162-cabana.jpg",
            description: "De origem modesta e sem grandes aspirações, a peculiar Louisa Clark é contratada para ser cuidadora de Will, um jovem tetraplégico depressivo e cínico.",
            link: "/title/12345"
        },
                {
            title: "A Cabana",
            thumbnail: "https://media.guiame.com.br/archives/2017/04/13/1269759162-cabana.jpg",
            description: "De origem modesta e sem grandes aspirações, a peculiar Louisa Clark é contratada para ser cuidadora de Will, um jovem tetraplégico depressivo e cínico.",
            link: "/title/12345"
        },
        {
            title: "A Cabana",
            thumbnail: "https://media.guiame.com.br/archives/2017/04/13/1269759162-cabana.jpg",
            description: "De origem modesta e sem grandes aspirações, a peculiar Louisa Clark é contratada para ser cuidadora de Will, um jovem tetraplégico depressivo e cínico.",
            link: "/title/12345"
        },
        {
            title: "A Cabana",
            thumbnail: "https://media.guiame.com.br/archives/2017/04/13/1269759162-cabana.jpg",
            description: "De origem modesta e sem grandes aspirações, a peculiar Louisa Clark é contratada para ser cuidadora de Will, um jovem tetraplégico depressivo e cínico.",
            link: "/title/12345"
        },
        {
            title: "A Cabana",
            thumbnail: "https://media.guiame.com.br/archives/2017/04/13/1269759162-cabana.jpg",
            description: "De origem modesta e sem grandes aspirações, a peculiar Louisa Clark é contratada para ser cuidadora de Will, um jovem tetraplégico depressivo e cínico.",
            link: "/title/12345"
        },
        {
            title: "A Cabana",
            thumbnail: "https://media.guiame.com.br/archives/2017/04/13/1269759162-cabana.jpg",
            description: "De origem modesta e sem grandes aspirações, a peculiar Louisa Clark é contratada para ser cuidadora de Will, um jovem tetraplégico depressivo e cínico.",
            link: "/title/12345"
        }
    ]
    return (
        <div className="Home navigation-fixed"> 
            <main>
                <FeaturedTitle title={movie.title} description={movie.description} thumbnail={movie.thumbnail} link={movie.link} />
                <CategoryTitles movies={movies}>Top 4</CategoryTitles>
                <CategoryTitles movies={movies}>Sucesso de Bilheteria</CategoryTitles>
                <CategoryTitles movies={movies}>Melhores do cinema nacional</CategoryTitles>
                <CategoryTitles movies={movies}>Comédia</CategoryTitles>
                <CategoryTitles movies={movies}>Ação</CategoryTitles>
                <CategoryTitles movies={movies}>Aventura</CategoryTitles>
                <CategoryTitles movies={movies}>Diversão</CategoryTitles>
            </main>
        </div>
    )
}

export default Home