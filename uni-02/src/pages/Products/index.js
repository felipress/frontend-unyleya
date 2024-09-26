import {Link} from 'react-router-dom'

const Products = () => {
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
        </div>
    )
}

export default Products