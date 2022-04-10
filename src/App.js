import './App.css';
import Login from './modules/authenticate/login/login';
import NewRecipe from './modules/forms/newRecipe/newRecipe'
import Basic from './modules/forms/basic/basic'
import Download from './modules/forms/download/download'
import AcctManager from './modules/forms/acctManager/acctManager'

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <NewRecipe/> */}
      {/* <Download/> */}
      <AcctManager/>
    </div>
  );
}

export default App;
