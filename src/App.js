import React from "react"
import './App.css';
import Login from './modules/authenticate/login/login';
import NewRecipe from './modules/forms/newRecipe/newRecipe'
// import Basic from './modules/forms/basic/basic'
import Download from './modules/forms/download/download'
// import Home from './modules/pages/home/home'
import { BrowserRouter as Router, 
         Route,
         Routes, 
         Switch,
         Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/download">Download</Link>
        <Link to="/newrecipe">New Recipe</Link>
        <Link to="/download">Download</Link>
        <Link to="/login">Login</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/download" element={<Download />}></Route>
        <Route path="/newrecipe" element={<NewRecipe />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>

    </Router>
  );
};

export default App;
