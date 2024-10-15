import { AuthProvider } from "../../context/AuthContext"
import "./Login.css"
import { useState } from "react"

const Login = () => {

    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })

    const changeHandle = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        })
    }

    const loginUser = async (inputs) => {
        const response = await fetch("http://localhost:3001/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json0"
            },
            body: JSON.stringify(inputs)
        })
        console.log(response)
    }

    const formHandle = (event) => {
        event.preventDefault()
        loginUser(inputs)
    }

    return (
        <div className="Login">
            <form onSubmit={formHandle}>
                <div className="field">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" required="required" onChange={changeHandle}/>
                </div>
                <div className="field">
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" required="required" onChange={changeHandle} />
                </div>
                <button>Acessar conta</button>
            </form>
        </div>
    )
}

export default Login