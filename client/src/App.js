import './App.css';
import LogReg from './views/LogReg';
import {Router} from "@reach/router";
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register';
import CreateAlbum from './components/CreateAlbum';
import Home from "./views/Home"

function App() {
  return (
    <div className="App">
      <Router>
        <LogReg path="/" />
        <Home path="/home" />
        <Login path="/Login" />
        <CreateAlbum path="/album/new" />
      </Router>
    </div>
  );
}
export default App;