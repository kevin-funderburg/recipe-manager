import './App.css';
import Login from './modules/authenticate/login/login';
import NewRecipe from './modules/forms/newRecipe/newRecipe'
import Basic from './modules/forms/basic/basic'
import Download from './modules/forms/download/download'

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Jessica/> */}
      <NewRecipe/>
      {/* <Download/> */}
    </div>
  );
}

export default App;
