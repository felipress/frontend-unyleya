import brand from "../../assets/brand.svg"
import pp from "../../assets/pp.jpg"
import {Link} from "react-router-dom"

const Navigation = () => {
    return (
        <nav className="fixed z-50 top-0 left-0 right-0 flex border-box p-3 items-center gap-4 bg-orange-100">
            <div>
                <Link to="/collection/create" className="flex items-center w-15 h-12 py-2.5 px-3.5 bg-orange-200 rounded hover:bg-orange-300">
                    <i className="material-symbols-outlined">add_box</i>
                </Link>
            </div>
            <div className="grow flex justify-center">
                <Link to="/"><img src={brand} alt="e-museum" /></Link>
            </div>
            <div>
                <Link to="/profile" className="flex items-center w-15 h-12 py-2.5 px-3.5 bg-orange-200 rounded hover:bg-orange-300">
                    <img src={pp} alt="Foto de Perfil" className="w-7 h-7 rounded-full" />
                </Link>
            </div>
        </nav>
    )
}

export default Navigation