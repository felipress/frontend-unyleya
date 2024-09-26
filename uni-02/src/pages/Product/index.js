import {useParams} from 'react-router-dom'

const Product = () => {
    const {id} = useParams()

    return (
        <div>
            Página do produto {id}
        </div>
    )
}

export default Product