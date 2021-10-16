import './App.css';
import LogReg from './views/LogReg';
import {Router} from "@reach/router";
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <LogReg path="/" />
        <Login path="/Login" />
      </Router>
    </div>
  );
}

export default App;
