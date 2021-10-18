import React, {useState, useEffect} from 'react';
import axios from 'axios';
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

        <div style={{margin:"auto" ,display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <Header />
            <div style={{display:"flex", flexDirection:"column",justifyContent: "center", marginLeft:"43%"}}>
                <p style={{fontSize:"2.2vw", fontWeight:"500"}}>{oneAlbum.bandName}</p>
                <img style={{width:"30%", borderRadius:"20px"}}src={oneAlbum.image} alt="image" />
                <div style={{border:"1px solid black", borderRadius:"20px", width:"33%", marginTop:"2%", marginBottom:"2%"}}>
                    <p style={{fontSize:"1vw", fontWeight:"400", marginLeft:"2%"}}>Album:  <span style={{fontSize:".9vw", color:"gray", textDecoration:"underline"}}>   "{oneAlbum.albumName}"</span></p>
                    <p style={{fontSize:"1vw", fontWeight:"400", marginLeft:"2%"}}>Genre:  <span style={{fontSize:".9vw", color:"gray", textDecoration:"underline"}}>   {oneAlbum.genre}</span></p>
                    <p style={{fontSize:"1vw", fontWeight:"400", marginLeft:"2%"}}>Era:  <span style={{fontSize:".9vw", color:"gray", textDecoration:"underline"}}>   {oneAlbum.era}</span></p>
                    <p style={{fontSize:"1vw", fontWeight:"400", marginLeft:"2%"}}>Rating:  <span style={{fontSize:".9vw", color:"gray", textDecoration:"underline"}}>  {oneAlbum.rating}</span></p>
                </div>
                
            </div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "15%", margin:"auto"}}>
                <button class="btn btn-secondary" ><Link to={`/album/edit/${oneAlbum._id}`} style={{color:"white", textDecoration:"none"}}>Edit</Link></button>
                <button class="btn btn-primary" ><Link to="/home" style={{color:"white", textDecoration:"none"}}>Home</Link></button>
                <div style={{width:"5%"}}><DeleteAlbum id={oneAlbum._id} /></div>
            </div>
            
            
    
        </div>
    )
}

export default OneAlbum;