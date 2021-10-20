import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import {Link, navigate} from '@reach/router';
import DeleteAlbum from './DeleteAlbum';
import Header from "./Header";

const OneAlbum = (props)=>{

    const [oneAlbum, setOneAlbum] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/albums/${props.id}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setOneAlbum(res.data);
        })
        .catch((err)=>console.log(err));
    }, [])

    return(
        <div>
            <Header />

    <div className="dashboard">
        <div className="one-album mt-5">
            <div>
                <h1>{oneAlbum.bandName}</h1>
                <img className="one-album-pic" src={oneAlbum.image} alt="image"/>
                <div className="">
                    <p style={{fontSize:"1vw", fontWeight:"400", marginLeft:"2%"}}>Album:  <span style={{fontSize:".9vw", color:"gray", textDecoration:"underline"}}>   "{oneAlbum.albumName}"</span></p>
                    <p style={{fontSize:"1vw", fontWeight:"400", marginLeft:"2%"}}>Genre:  <span style={{fontSize:".9vw", color:"gray", textDecoration:"underline"}}>   {oneAlbum.genre}</span></p>
                    <p style={{fontSize:"1vw", fontWeight:"400", marginLeft:"2%"}}>Era:  <span style={{fontSize:".9vw", color:"gray", textDecoration:"underline"}}>   {oneAlbum.era}</span></p>
                    <p style={{fontSize:"1vw", fontWeight:"400", marginLeft:"2%"}}>Rating:  <span style={{fontSize:".9vw", color:"gray", textDecoration:"underline"}}>  {oneAlbum.rating}</span></p>
                    {
                        localStorage.getItem("userId") === oneAlbum.user_id ?
                        <button className="single-album-button">
                            <Link style={{textDecoration:"none", color:"black"}} to={`/album/edit/${oneAlbum._id}`}>Edit</Link>
                        </button>: null
                    }
                    {
                        localStorage.getItem("userId") === oneAlbum.user_id ?
                        <DeleteAlbum id={oneAlbum._id}/> 
                        : null
                    }
                </div>
            </div>    
        </div>
    </div>
    </div>
    )
}

export default OneAlbum;