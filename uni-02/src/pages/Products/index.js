import {Link, useSearchParams} from 'react-router-dom'
import "./style.css"

const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    return (
        <div>
            <h1>Lista de Produtos</h1>
            <ul>
                <li>
                    <Link to="/product/1">Produto 1</Link>
                </li>
                <li>
                    <Link to="/product/2">Produto 2</Link>
                </li>
                <li>
                    <Link to="/product/3">Produto 3</Link>
                </li>
                <li>
                    <Link to="/product/4">Produto 4</Link>
                </li>
            </ul>
            <p>Página: {searchParams.get('page')}</p>
            <div className="pagination">
                <button onClick={() => {setSearchParams({page: 1})}}>1</button>
                <button onClick={() => {setSearchParams({page: 2})}}>2</button>
                <button onClick={() => {setSearchParams({page: 3})}}>3</button>
                <button onClick={() => {setSearchParams({page: 4})}}>4</button>
            </div>
        </div>
    )
}

export default Products