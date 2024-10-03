import InputField from "../../components/Form/InputField"
import LinkButton from "../../components/Form/LinkButton"
import Button from "../../components/Form/Button"
import "./profile.css"

const Profile = () => {
    return (
        <div className="Profile navigation-fixed">
            <main>
                <div className="container">
                    <form>
                        <h2 className="title">Meu Perfil</h2>
                        <InputField type="text" name="nameInput" label="Nome" required="required" />
                        <InputField type="text" name="lastnameInput" label="Sobrenome" required="required" />
                        <InputField type="date" name="birthdayInput" label="Data de nascimento" required="required" />
                        <InputField type="email" name="emailInput" label="E-mail" required="required" />
                        <h5 className="title">Alterar senha</h5>
                        <InputField type="password" name="currentPasswordInput" label="Senha atual" />
                        <InputField type="password" name="newPasswordInput" label="Nova senha" />
                        <InputField type="password" name="newPasswordConfirmInput" label="Confirme a senha" />
                        <Button styles="primary is-full">Salvar alterações</Button>
                        <LinkButton to="/login" styles="secondary inverted is-full">Sair do Aplicativo</LinkButton>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default Profile