import "./notfound.css"
import Navigation from "../../components/Navigation"
import ErrorSymbol from "./error-symbol.svg"
import LinkButton from "../../components/Form/LinkButton"

const NotFound = () => {
    return (
        <div className="NotFound navigation-fixed">
            <Navigation />
            <main>
                <figure>
                    <img src={ErrorSymbol} alt="Carinha triste" />
                </figure>
                <div className="message">
                    <h1 className="title">Ops... Algo deu errado!</h1>
                    <h4 className="subtitle">Não consegui encontrar a página que você está procurando.</h4>
                    <LinkButton to="/" styles="secondary inverted">Retornar para a página inicial</LinkButton>
                </div>
            </main>
        </div>
    )
}

export default NotFound