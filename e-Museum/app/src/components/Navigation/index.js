import brand from "../../assets/brand.svg"
import pp from "../../assets/pp.jpg"
import {Link} from "react-router-dom"
import "./navigation.css"

const Navigation = () => {
    return (
        <nav className="Navigation fixed z-50 top-0 left-0 right-0 flex border-box p-3 items-center gap-4 bg-orange-100">
            <div>
                <Link to="/collection/create" className="flex items-center w-15 h-12 py-2.5 px-3.5 bg-orange-200 rounded hover:bg-orange-300">
                    <i className="material-symbols-outlined">add_box</i>
                </Link>
            </div>
            <div className="grow flex justify-center">
                <Link to="/"><img src={brand} alt="e-museum" /></Link>
            </div>
            <div className="menu relative">
                <button className="flex items-center w-15 h-12 py-2.5 px-3.5 bg-orange-200 rounded">
                    <img src={pp} alt="Foto de Perfil" className="w-7 h-7 rounded-full" />
                </button>
                <ul className="hidden absolute right-0 bg-orange-300 text-sm text-orange-950 text-nowrap rounded -mt-2 font-semibold">
                    <li>
                        <Link to="/museum" className="block px-4 py-2 border-b border-orange-200">Configurações do Museu</Link>
                    </li>
                    <li>
                        <Link to="/profile" className="block px-4 py-2 border-b border-orange-200">Minha conta</Link>
                    </li>
                    <li>
                        <Link to="/logout" className="block px-4 py-2">Deslogar</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation