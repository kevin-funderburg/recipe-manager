import React from "react"
import Login from './modules/authenticate/login/login.jsx';
import Signup from "./modules/authenticate/signup/signup.jsx";
import NewRecipe from './modules/forms/newRecipe/newRecipe.jsx';
import Recipes from './modules/forms/recipes/recipes.jsx';
import Download from './modules/forms/download/download.jsx'
import About from './modules/pages/about/about'
import Navbar from './modules/navbar/NavBar.jsx'
import GroceryList from './modules/forms/GroceryList/GroceryList'
import AcctManager from './modules/forms/acctManager/acctManager'
import Home from './modules/pages/home/index.jsx'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6A5638',
    },
  },
});

/*
TODO:

1. Add grocery list functionality
2. Add in stock module
3. 
*/

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/download" element={<Download />}></Route>
        <Route path="/newRecipe" element={<NewRecipe />}></Route>
        <Route path="/myRecipes" element={<Recipes />}></Route>
        <Route path="/groceryList" element={<GroceryList />}></Route>
        <Route path="/myAccount" element={<AcctManager />}></Route>
        <Route path="/inStock" element={<Home />}></Route>
      </Routes>

    </Router>
    </ThemeProvider>
    
  );
};

export default App;
