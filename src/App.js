import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import ToDoList from './components/ToDoList';
import StarWarsWiki from './components/StarWarsWiki';


function App() {
  return (
    <div className="App">
      <Counter/>
      <ToDoList/>
      <StarWarsWiki/>
    </div>
  );
}

export default App;
