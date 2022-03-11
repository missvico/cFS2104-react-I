import logo from './logo.svg';
import './index.scss';
import Counter from './components/Counter';
import ToDoList from './components/ToDoList';
import StarWarsWiki from './components/StarWarsWiki';
import StarWarsCharacter from './components/StarWarsCharacter';
import Landing from './components/Landing';
import NotFound from './components/NotFound';
import Comment from './components/Comment';
import CommentReact from './components/CommentReact';

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav class="nav justify-content-center navbar">
          <Link class="nav-link" to="/">Home</Link>
          <Link class="nav-link" to="/counter">Counter</Link>
          <Link class="nav-link" to="/tasks">Tasks</Link>
          <Link class="nav-link" to="/starwars">Starwars</Link>
          <Link class="nav-link" to="/comment">Contact Us</Link>
          <Link class="nav-link" to="/commentreact">Contact Us react</Link>

        </nav>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/counter" element={<Counter/>} />
          <Route path="/tasks" element={<ToDoList/>} />
          <Route path="/starwars/:id" element={<StarWarsCharacter/>} />
          <Route path="/starwars" element={<StarWarsWiki/>} />
          <Route path="/comment" element={<Comment/>} />
          <Route path="/commentreact" element={<CommentReact/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
