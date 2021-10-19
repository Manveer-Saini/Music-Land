import React, {useState, useEffect} from "react";
import {Link} from '@reach/router';
import axios from 'axios';
import DeleteAlbum from "./DeleteAlbum";
import Header from "./Header";
import musicland_lg from '../images/musicland_lg.jpg';


const DisplayAll = (props)=>{

    const [albumList, setAlbumList] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/albums')
        .then((res)=>{
            console.log(res.data);
            setAlbumList(res.data);
        })
        .catch((err)=>console.log(err))
    }, [])

    const deleteFilter = (id) =>{
        console.log("Deleted Album.");
        let newList = albumList.filter((album)=> album._id !== id);
        setAlbumList(newList);
    }
    
    return(
        <div>
            <Header/>
            <div className="front-page-video">
                <video className="video" muted loop="true" autoPlay="true" >
                        <source src="./videos/dashboard.mp4" type="video/mp4" />
                </video>   
            </div>
            <h1>Check Out Are Most Recent Entries!</h1>
            <div className="dashboard">
                {
                    albumList.map((album, idx) => (
                        <div className="dashboard-albums" key={idx} >
                            <h5 style={{fontSize:"28px"}}>{album.bandName}</h5>
                            <h5 style={{fontSize:"18px", fontStyle:"italic", color:"gray"}}>{album.albumName}</h5>
                            <Link to={`/album/${album._id}`}>
                            <img src={album.image} alt="album" style={{width:"200px", height:"200px", borderRadius:"20px"}}/>
                            </Link>
                            <br/>
                            <br/>
                            <button className="single-album-button">
                            <Link style={{textDecoration:"none", color:"black"}} to={`/album/edit/${album._id}`}>Edit</Link>
                            </button>
                            &nbsp;&nbsp;&nbsp;
                            <DeleteAlbum id={album._id} deleteFilter={deleteFilter} />
                            <br/>
                            <span>Added By:</span><Link className="link" to={`/user/profile/${album.user_id?._id}`} style={{textDecoration:"none"}}> {album.user_id?.username}</Link>
                        </div> 
                    ))
                }
            </div>
        </div>
    )
}

export default DisplayAll;  