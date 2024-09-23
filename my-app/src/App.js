import './App.css';
import Welcome from './components/welcome';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <Welcome nome='Felipe' />
      <TodoList></TodoList>
    </div>
  );
}

export default App;
