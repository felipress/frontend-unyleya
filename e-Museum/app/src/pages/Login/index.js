import { useContext, useState } from "react"
import brand from "../../assets/brand.svg"
import {Link, useNavigate} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

import featured from "../../assets/abaporu.jpg"

const Login = () => {
    const userLogged = useContext(AuthContext)
    // const setUserLogged = useContext(AuthContext)
    const navigate = useNavigate()

    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })
    
    const onChangeHandle = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        })
    }

    const formHandle = async (event) => {
        event.preventDefault()
        /* const response = await fetch("http://localhost:5000/auth/login", {
            method: "POST",
            body: JSON.stringify(inputs)
        })

        console.log(response) */
        // Changes useLogged context to true and redirects
        console.log(userLogged)
        // setUserLogged(true)
        navigate("/", {replace: true})

    }

    return (
        <div className="Login flex box-border min-h-screen items-center justify-center">
            <figure>
                <img src={featured} alt="Pintura Romero Brito" className="h-screen" />
            </figure>
            <form method="POST" onSubmit={formHandle} className="block mx-auto max-w-lg border border-solid py-8 px-10 rounded-xl">
                <div className="mt-3 mb-10 flex justify-center">
                    <img src={brand} alt="e-Museum" className="w-auto h-6" />
                </div>
                <h2 className="text-2xl font-bold text-wrap text-gray-600">Gestão digital integrada de acervo museológico</h2>
                <div>
                    <div className="my-3 flex flex-col">
                        <label htmlFor="email" className="font-semibold py-1 text-gray-500">E-mail</label>
                        <input type="email" name="email" required="required" placeholder="email@server.com" onChange={onChangeHandle} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                    </div>
                    <div className="my-3 flex flex-col">
                        <label htmlFor="password" className="font-semibold py-1 text-gray-500">Senha</label>
                        <input type="password" name="password" required="required" onChange={onChangeHandle} className="block px-3.5 py-2.5 rounded border border-solid w-full focus:outline-orange-500" />
                    </div>
                    <div className="my-2 flex justify-end">
                        <Link to="/auth/recover" className="text-orange-500 font-medium">Esqueceu a senha?</Link>
                    </div>
                    <div className="mt-6 mb-3">
                        <button className="block w-full px-5 py-3 rounded text-center font-semibold text-white bg-orange-500 hover:bg-orange-600">Acessar minha conta</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login