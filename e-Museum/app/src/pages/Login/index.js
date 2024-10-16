import { useState } from "react"
import brand from "../../assets/brand.svg"
import {Link} from "react-router-dom"

const Login = () => {
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

    const formHandle = (event) => {
        event.preventDefault()
        console.log(inputs)
    }

    return (
        <div className="Login">
            <form method="POST" onSubmit={formHandle}>
                <div>
                    <img src={brand} alt="e-Museum" className="" />
                </div>
                <h2>Gestão digital integrada de acervo museológico</h2>
                <div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" required="required" placeholder="email@server.com" onChange={onChangeHandle} />
                    </div>
                    <div>
                        <label htmlFor="password">Senha</label>
                        <input type="password" name="password" required="required" onChange={onChangeHandle} />
                    </div>
                    <div>
                        <Link to="/auth/recover" className="">Esqueceu a senha?</Link>
                    </div>
                    <button>Acessar minha conta</button>
                </div>
            </form>
        </div>
    )
}

export default Login