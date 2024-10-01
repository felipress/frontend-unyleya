import Brand from "../../components/Navigation/brand"
import Button from "../../components/Form/Button"
import LinkButton from "../../components/Form/LinkButton"
import "./login.css"

const Login = () => {
    return (
        <div className="Login navigation-fixed">
            <main>
                <div className="container">
                    <Brand />
                    <div className="login-form">
                        <form>
                            <h3 className="title">Muito entretenimento espera por você!</h3>
                            <div className="field input">
                                <label for="email">E-mail</label>
                                <input type="text" name="email" placeholder="email@email.com" required="required" />
                            </div>
                            <div className="field input">
                                <label for="password">Senha</label>
                                <input type="text" name="password" required="required" />
                            </div>
                            <Button styles="primary inverted is-full">Acessar minha conta</Button>
                            <LinkButton to="/register" styles="secondary inverted is-full">Cadastre-se</LinkButton>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Login