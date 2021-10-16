import React, {useState} from "react";
import { Router } from "@reach/router";
import { Link, navigate } from '@reach/router';
// import NavBar from '../components/NavBar.js';
// import men from "../images/men.png";
// import women from "../images/women.jpeg";
import DisplayAll from '../components/DisplayAll.js';


const Home = () => {

    const[albumList, setAlbumList] = useState([]);
    const [newAlbum, setNewAlbum] = useState([]);
    
    return (
        <div style={{ textAlign: "center" }}>

            <DisplayAll newAlbum={newAlbum} setNewAlbum={setNewAlbum} albumList={albumList} setAlbumList={setAlbumList}/>

            {/* <NavBar />
            <br />
            <div style={{ width: "60%", height: "100%", textAlign: "space-between", display: "flex", flexDirection: "row", margin: "auto" }}>
                <div style={{ display: "flex", flexDirection: "column", textAlign: "center", margin: "30px" }}>
                    <img src={men} alt="men"></img>
                    <br />
                    <button type="button" className="btn btn-outline-success"><Link to={'/'}>Mens Clothing </Link></button>
                </div>
                <div style={{ display: "flex", flexDirection: "column", textAlign: "center", margin: "30px" }}>
                    <img src={women} alt="women"></img>
                    <br />
                    <button type="button" className="btn btn-outline-warning"><Link to={'/'}>Womens Clothing </Link></button>
                </div>
            </div> */}
        </div>
    )
}

export default Home;