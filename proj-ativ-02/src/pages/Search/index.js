import { useSearchParams } from "react-router-dom"
import "./search.css"
import CategoryTitles from "../../components/CategoryTitles"

const Search = () => {
    const [searchQuery] = useSearchParams()
    const query = searchQuery.get("query")

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
        <div className="Search navigation-fixed">
            <main>
                <div className="container">
                    <h2 className="title">Buscar</h2>
                    <h4 className="title">Sua pesquisa por "{query}" retornou os seguintes resultados...</h4>
                </div>
                <CategoryTitles movies={movies}></CategoryTitles>
            </main>
        </div>
    )
}

export default Search