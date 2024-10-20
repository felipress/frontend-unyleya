import {Link} from "react-router-dom"

const Item = ({data}) => {
    return (
        <li className="flex items-center gap-4 border-b pb-4">
            <figure>
                <img src={data.photo} alt="img" className="w-auto h-20 rounded bg-orange-300" />
            </figure>
            <div className="grow">
                <span className="text-sm">Número de Registro: {data.registerNumber.number}</span>
                <h4 className="font-semibold">{data.name}</h4>
                <div className="text-sm text-gray-500">{data.description}</div>
            </div>
            <div>
            <Link to={"/collection/details/" + data._id} className="block px-3 py-1.5 rounded text-center font-semibold text-orange-500 border border-solid border-orange-500 hover:bg-orange-500 hover:text-white">
                <i className="material-symbols-outlined text-base">edit</i>
            </Link>
            </div>
        </li>
    )
}

export default Item