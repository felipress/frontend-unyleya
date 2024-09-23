import "./bulma/assets/bulma.min.css"
import Block from './bulma/elements/Block'
import Box from './bulma/elements/Box'
import Button from './bulma/elements/Button'
import Content from './bulma/elements/Content'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Block>Oi</Block>
        <Box>Este é um box</Box>
        <Button type="button" styles="is-medium">Button</Button>
        <Button type="a" href="https://google.com" styles="is-primary is-dark">Google</Button>
        <Button type="input" styles="is-outlined is-primary">Login</Button>
        <Content styles="is-small">Aqui fica um conteúdo na classe Content</Content>
      </header>
    </div>
  );
}

export default App;
