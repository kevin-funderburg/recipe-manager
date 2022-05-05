import React from "react"
import Login from './modules/authenticate/login/login.jsx';
import Signup from "./modules/authenticate/signup/signup.jsx";
import NewRecipe from './modules/forms/newRecipe/newRecipe.jsx';
import Recipes from './modules/forms/recipes/recipes.jsx';
import Download from './modules/forms/download/download.jsx'
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
3. Test cases
  - add users
  - add recipe
  - remove recipe
  - add to grocery list
  - delete from grocery list
  - update user
  - update recipe
  - remove user
4. System statechart diagrams
5. Textual description of the structure of your system and implemented algorithms 
  critical for the system's behavior (if you implemented some complex algorithm from scratch)
6. 

TODO - Kevin
1. figure out prep time and cook time
2. database testing
3. add error catching to download when entering a bad url

TODO - Arjit
2. redo download
3. field validation
4. user controller - password and stuff
*/

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/newRecipe" element={<NewRecipe />}></Route>
        <Route path="/download" element={<Download />}></Route>
        <Route path="/myRecipes" element={<Recipes />}></Route>
        <Route path="/groceryList" element={<GroceryList />}></Route>
        <Route path="/myAccount" element={<AcctManager />}></Route>
      </Routes>

    </Router>
    </ThemeProvider>
    
  );
};

export default App;
