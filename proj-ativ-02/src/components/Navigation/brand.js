import { Link } from 'react-router-dom'
import BrandLogo from "../../assets/brand.svg"

const Brand = () => {
    return (
        <div className="item brand">
            <Link to="/">
                <img src={BrandLogo} alt="sPlay" />
            </Link>
        </div>
    )
}

export default Brand