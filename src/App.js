import React from "react"
import './App.css';
import Login from './modules/authenticate/login';
import NewRecipe from './modules/forms/newRecipe/newRecipe'
// import Basic from './modules/forms/basic/basic'
import Download from './modules/forms/download/download'
import Home from './modules/pages/home'
import About from './modules/pages/about/about'
import Navbar from './modules/navbar'
import RecipeList from './modules/forms/RecipeList/RecipeList'
import AcctManager from './modules/forms/acctManager'

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

function App() {
  return (
    <ThemeProvider theme={theme}>
<Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/download" element={<Download />}></Route>
        <Route path="/newrecipe" element={<NewRecipe />}></Route>
        <Route path="/myrecipes" element={<RecipeList />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/myaccount" element={<AcctManager />}></Route>
      </Routes>

    </Router>
    </ThemeProvider>
    
  );
};

export default App;
