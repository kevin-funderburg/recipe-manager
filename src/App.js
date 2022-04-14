import './App.css';
import Login from './modules/authenticate/login/login';
import NewRecipe from './modules/forms/newRecipe/newRecipe'
import Basic from './modules/forms/basic/basic'
import Download from './modules/forms/download/download'
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>

      <div className="App">
        {/* <Login/> */}
        <NewRecipe/>
        {/* <Download/> */}
      </div>

      <Routes>

        <Route path="/download" element={<Download />}>

        </Route>
        {/* <Route path="/" element={<NewRecipe />} exact>
          <NewRecipe />
        </Route> */}
        {/* 
        <Route path="/download" exact>
          <Download />  
        </Route>

        <Route path="/newRecipe" exact>
          <Download />  
        </Route>

        <Route path="/acctManage" exact>
          <Download />  
        </Route> */}
        
      </Routes>

    </BrowserRouter>

  );
}

export default App;
