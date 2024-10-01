import "./searchbar.css"

const SearchBar = () => {
    return (
        <div className="SearchBar">
            <input type="text" placeholder="Buscar" name="search" />
            <button>
                <i className="material-symbols-outlined">search</i>
            </button>
        </div>
    )
}

export default SearchBar