import './App.css';
import Login from './modules/authenticate/login/login';
import NewRecipe from './modules/forms/newRecipe/newRecipe'
import Basic from './modules/forms/basic/basic'
import Download from './modules/forms/download/download'
import { Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <Router>

      <div className="App">
        <Login/>
        {/* <NewRecipe/> */}
        {/* <Download/> */}
      </div>

      <Routes>

        <Route path="/" exact>
          <NewRecipe />
        </Route>

        <Route path="/download" exact>
          <Download />  
        </Route>

        <Route path="/newRecipe" exact>
          <Download />  
        </Route>

        <Route path="/acctManage" exact>
          <Download />  
        </Route>
        
      </Routes>

    </Router>

  );
}

export default App;
