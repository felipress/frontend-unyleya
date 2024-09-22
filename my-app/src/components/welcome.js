const Welcome = ({nome = "Cliente", sobrenome}) => {
    return (
        <h1>Olá, {nome} {sobrenome}</h1>
    )
}
export default Welcome