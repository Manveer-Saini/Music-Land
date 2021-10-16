import React, {useState, useEffect} from "react";
import {Link} from '@reach/router';
import axios from 'axios';
import DeleteAlbum from "./DeleteAlbum";



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
            <div className="addpet">
                <h1>Music Land</h1> 
                <Link to={'/album/new'}><button>Add an Album!</button></Link> 
            </div>
            <h3>What is your favorite album ever? Have multiple? Add them all!</h3>
            
            <table>
            {
                albumList?
                    albumList.map((album, index)=>(
                        <div key={index}>
                            <thead>
                                <tr>
                                    <th>Band Name</th>
                                    <th>Album Name</th>
                                    <th>Genre</th>
                                    <th>Era</th>
                                    <th>Rating</th>
                                    <th>Posted By:</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr key={index}>
                                    <td>{album.bandName}</td>
                                    <td>{album.albumName}</td>
                                    <td>{album.genre}</td>
                                    <td>{album.era}</td>
                                    <td>{album.rating}</td>
                                    <td>{album.user_id}</td>
                                    <td><Link to={`/album/edit/${album._id}`}><span>Edit</span></Link></td>
                                    <td><DeleteAlbum deleteFilter={deleteFilter} id={album._id}/></td>
                                </tr>
                            </tbody>
                        </div>
                    ))
                :null
            }
            </table>
        </div>
    )
}

export default DisplayAll;  