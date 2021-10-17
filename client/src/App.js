import './App.css';
import LogReg from './views/LogReg';
import {Router} from "@reach/router";
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register';
import CreateAlbum from './components/CreateAlbum';
import Home from "./views/Home"
import Header from './components/Header';
import EditAlbum from './components/EditAlbum';


function App() {
  return (
    <div className="App">
      <Router>
        <LogReg default/>
        <Login path="/Login" />
        <Home path="/home" />
        <CreateAlbum path="/album/new"/>
        <EditAlbum path="/album/edit/:id" />
      </Router>
    </div>
  );
}
export default App;