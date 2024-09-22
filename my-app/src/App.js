import './App.css';
import Welcome from './components/welcome';

function App() {
  return (
    <div className="App">
      <Welcome />
      <Welcome nome="Felipe" sobrenome="Magalhães" />
      <Welcome nome="Regina" />
    </div>
  );
}

export default App;
