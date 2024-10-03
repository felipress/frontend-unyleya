import { useSearchParams } from "react-router-dom"
import "./search.css"

const Search = () => {
    const [searchQuery] = useSearchParams()
    const query = searchQuery.get("query")
    return (
        <div className="Search navigation-fixed">
            <main>
                <div className="container">
                    <h2 className="title">Buscar</h2>
                    <h4 className="title">Sua pesquisa por "{query}" retornou os seguintes resultados...</h4>
                </div>

            </main>
        </div>
    )
}

export default Search