import "./bulma/assets/bulma.min.css"
import Block from './bulma/elements/Block'
import Box from './bulma/elements/Box'
import Button from './bulma/elements/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Block>Oi</Block>
        <Box>Este é um box</Box>
        <Button type="button" size="is-large">Button</Button>
        <Button type="a" href="https://google.com" color="is-primary is-dark">Google</Button>
        <Button type="input">Login</Button>
      </header>
    </div>
  );
}

export default App;
