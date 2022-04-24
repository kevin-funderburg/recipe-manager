import React from "react"
import Login from './modules/authenticate/login/login.jsx';
import NewRecipe from './modules/forms/newRecipe/newRecipe.jsx'
// import Basic from './modules/forms/basic/basic'
import Download from './modules/forms/download/download'
import Home from './modules/pages/home/home'
import About from './modules/pages/about/about'
import Navbar from './modules/navbar/navBar.jsx'
import RecipeList from './modules/forms/RecipeList/RecipeList'
import GroceryList from './modules/forms/GroceryList/GroceryList'
import AcctManager from './modules/forms/acctManager/acctManager'

import { BrowserRouter as Router, 
         Route,
         Routes, 
         Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/download" element={<Download />}></Route>
        <Route path="/newRecipe" element={<NewRecipe />}></Route>
        <Route path="/myRecipes" element={<RecipeList />}></Route>
        <Route path="/groceryList" element={<GroceryList />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/myAccount" element={<AcctManager />}></Route>
      </Routes>

    </Router>
  );
};

export default App;
