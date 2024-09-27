import {Outlet, useParams} from 'react-router-dom'

const Product = () => {
    const {id} = useParams()

    return (
        <div>
            Página do produto {id}
            <Outlet />
        </div>
    )
}

export default Product