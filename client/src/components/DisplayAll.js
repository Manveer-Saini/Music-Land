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
        <div className="display">
            <Header/>
            <div className="">
            <img src={musicland_lg} alt="logo"></img>    
            </div>
            <Link className="link" to="/album/new"><h3>Please add your favorite Album(s)</h3></Link>
            <div style={{width: "70%", margin:"auto" ,display: "flex", flexDirection: "row", justifyContent: "flex start"}}>
                {
                    albumList.map((album, idx) => (
                        <div className="listItem" key={idx} style={{
                            margin:"30px",
                            width:"30%",
                            height:"30%",
                        }}>   
                            
                            <h5 style={{fontSize:"28px"}}>{album.bandName}</h5>
                            <h5 style={{fontSize:"18px", fontStyle:"italic", color:"gray"}}>{album.albumName}</h5>
                            <Link to={`/album/${album._id}`}>
                            <img src={album.image} alt="album" style={{width:"200px", height:"200px", borderRadius:"20px"}}/>
                            </Link>
                            <br/>
                            <br/>
                            <button type="button" class="btn btn-secondary"><Link to={`/album/edit/${album._id}`}  style={{color:"white", textDecoration:"none"}}>Edit</Link></button>
                            &nbsp;&nbsp;&nbsp;
                            <DeleteAlbum id={album._id} deleteFilter={deleteFilter} />
                            <br/>
                            <span>Added By:</span><Link to={`/user/profile/${album.user_id?._id}`} style={{textDecoration:"none"}}> {album.user_id?.username}</Link>
                        </div> 
                    ))
                }
            </div>
        </div>
    )
}

export default DisplayAll;  