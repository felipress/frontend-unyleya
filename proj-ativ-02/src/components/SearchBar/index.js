import { useNavigate } from "react-router-dom"
import "./searchbar.css"
import { useState } from "react"

const SearchBar = () => {
    const [searchInput, setInputSearch] = useState("")
    const navigate = useNavigate()

    const searchInputHandle = (event) => {
        setInputSearch(event.target.value)
    }

    const searchInputSend = (event) => {
        if(searchInput !== ""){
            return navigate("/search?query=" + searchInput, {replace: true})
        }
        else{
            return navigate("/home", {replace: true})
        }
    }

    const formHandle = (event) => {
        event.preventDefault()
    }
    return (
        <div className="SearchBar">
            <form action="/search" id="search-form" onSubmit={formHandle}>
                <input type="text" placeholder="Buscar" value={searchInput} onChange={searchInputHandle} onKeyUp={searchInputSend} />
                <button>
                    <i className="material-symbols-outlined">search</i>
                </button>
            </form>
        </div>
    )
}

export default SearchBar