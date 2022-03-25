import logo from './logo.svg';
import './index.scss';
//import 'bootstrap/scss/bootstrap.scss';
//import Background from '../public/slider-1.png'
import Counter from './components/Counter';
import ToDoList from './components/ToDoList';
import StarWarsWiki from './components/StarWarsWiki';
import StarWarsCharacter from './components/StarWarsCharacter';
import Landing from './components/Landing';
import NotFound from './components/NotFound';
import Comment from './components/Comment';
import CommentReact from './components/CommentReact';
import StarWarsPlanets from './components/StarWarsPlanets';
import StarWarsSinglePlanet from './components/StarWarsSinglePlanet';

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <img src={process.env.PUBLIC_URL + '/img/slider-1.png'} /> */}
      <BrowserRouter>
        <nav class="nav justify-content-center navbar">
          <Link class="nav-link" to="/">Home</Link>
          <Link class="nav-link" to="/counter">Counter</Link>
          <Link class="nav-link" to="/tasks">Tasks</Link>
          <Link class="nav-link" to="/starwars/characters">Characters</Link>
          <Link class="nav-link" to="/starwars/planets">Planets</Link>
          <Link class="nav-link" to="/comment">Contact Us</Link>
          <Link class="nav-link" to="/commentreact">Contact Us react</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/counter" element={<Counter/>} />
          <Route path="/tasks" element={<ToDoList/>} />
          <Route path="/starwars/characters/:id" element={<StarWarsCharacter/>} />
          <Route path="/starwars/characters" element={<StarWarsWiki/>} />
          <Route path="/starwars/planets" element={<StarWarsPlanets/>} />
          <Route path="/starwars/planets/:id" element={<StarWarsSinglePlanet/>} />
          <Route path="/comment" element={<Comment/>} />
          <Route path="/commentreact" element={<CommentReact/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
