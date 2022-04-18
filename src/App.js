import React from "react"
import './App.css';
// import Login from './modules/authenticate/login/login';
// import NewRecipe from './modules/forms/newRecipe/newRecipe'
// import Basic from './modules/forms/basic/basic'
// import Download from './modules/forms/download/download'
// import Home from './modules/pages/home/home'
import { BrowserRouter as Router, 
         Route,
         Routes, 
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
    <div>
      <Link to="/">Home</Link>
    </div>
  );
};

export default App;
