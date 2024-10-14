import "./Login.css"
import { useState } from "react"

const Login = () => {
    const [inputs, setInputs] = useState([{
        email: "",
        senha: ""
    }])

    /*const changeHandle = (event) => {
        setInputs([
            ...inputs,
            {
                event.target.name: event.target.value
            }
        ])
    }*/

    return (
        <div className="Login">
            <form>
                <div className="field">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" required="required" onChange={changeHandle}/>
                </div>
                <div className="field">
                    <label htmlFor="senha">Senha</label>
                    <input type="password" name="senha" required="required" onChange={changeHandle} />
                </div>
                <button>Acessar conta</button>
            </form>
        </div>
    )
}

export default Login