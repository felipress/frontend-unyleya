import { useNavigate } from "react-router-dom"

const Index = () => {
    const navigate = useNavigate()
    return navigate("/login", {replace: true})
}

export default Index