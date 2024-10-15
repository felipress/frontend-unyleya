import Brand from "../../components/Navigation/brand"
import Button from "../../components/Form/Button"
import LinkButton from "../../components/Form/LinkButton"
import "./login.css"
import { Link } from "react-router-dom"
import InputField from "../../components/Form/InputField"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()

    const [inputValues, setInputValues] = useState({
        emailInput: '',
        passwordInput: ''
    })

    const handleChangeValues = (event) => {
        setInputValues({
            ...inputValues,
            [event.target.name]: event.target.value
        })
    }

    const formHandle = (event) => {
        event.preventDefault()
        return navigate("/home", {replace: true})
    }
    return (
        <div className="Login">
            <main>
                <div className="container">
                    <Brand />
                    <div className="login-form">
                        <form method="POST" onSubmit={formHandle}>
                            <h3 className="title">Muito entretenimento espera por você!</h3>
                            <InputField type="email" name="emailInput" label="E-mail" placeholder="email@email.com" required="required" onChange={handleChangeValues} />
                            <InputField type="password" name="passwordInput" label="Senha" required="required" onChange={handleChangeValues} />
                            <Button styles="primary inverted is-full">Acessar minha conta</Button>
                            <LinkButton to="/register" styles="secondary inverted is-full">Cadastre-se</LinkButton>
                        </form>
                    </div>
                </div>
            </main>
            <footer>
                ©2024  Todos os direitos reservados  à sPlay Entertainment. Conheça os nossos <Link to="/terms-policy">Termos de Uso</Link> e <Link to="/privacy-policy">Política de Privacidade</Link>.
            </footer>
        </div>
    )
}

export default Login