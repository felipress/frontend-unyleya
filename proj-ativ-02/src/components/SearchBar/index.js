import "./searchbar.css"
import { useState } from "react"

const SearchBar = () => {
    const [search, setSearch] = useState("")

    const searchHandle = (event) => {
        setSearch(event.target.value)
        if(search.length >= 3){
            console.log("pode enviar")
        }
    }

    const formHandle = (event) => {
        event.preventDefault()
    }
    return (
        <div className="SearchBar">
            <form action="/search" onSubmit={formHandle}>
                <input type="text" placeholder="Buscar" value={search} onChange={searchHandle} />
                <button>
                    <i className="material-symbols-outlined">search</i>
                </button>
            </form>
        </div>
    )
}

export default SearchBar