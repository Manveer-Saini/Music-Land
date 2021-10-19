import React, { useState, useEffect } from "react";
import { navigate } from '@reach/router';
import axios from 'axios';
import { Link } from '@reach/router';
import Header from "./Header";

const UserProfile = (props) => {
    const [userAlbumList, setUserAlbumList] = useState([]);
    const [errors, setErrors] = useState({});
    const [userPage, setUserPage] = useState({});
    const { id } = props;

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${id}`)
            .then((res) => {
                console.log(res.data);
                setUserPage(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/albums/user/${id}`)
        .then((res)=>{
            console.log(res.data);
            setUserAlbumList(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    return (
        <div>
            <Header/>
            <div className="UserWrapper">
            <h1 style={{paddingTop:"2%"}}>Welcome to {userPage.username}'s Profile!</h1>
            <div style={{textAlign:"center", width: "90%", margin:"auto" ,display: "flex", flexDirection: "row", verticalAlign:"top"}}>
                <div style={{textAlign:"center", width: "40%", margin:"auto", border:"1px solid black", background: "black", color: "white", borderRadius:"15px"}}>
                    <h3> User Profile</h3>
                    <table className="table table-dark">
                        <tbody>
                        <tr><td>First Name:</td> <td>{userPage.firstName} </td></tr>
                        <tr><td>Last Name:</td> <td>{userPage.lastName}</td></tr>
                        <tr><td>Username:</td> <td>{userPage.username}</td></tr>
                        </tbody>
                        </table>


                </div>
                <div style={{textAlign:"center", width: "60%", margin:"auto", border: "3px Solid Black", borderRadius:"5%", margin:"2%", background:"lightgray"}}>
                    <h3 style={{marginTop:"1%", fontWeight:"600", fontStyle:"italic", fontSize:"36px"}}>Your favorite albums: </h3>
                    <div style={{textAlign:"center", width: "85%", height:"90%", margin:"auto" ,display: "flex", flexDirection: "row", justifyContent: "flex start", verticalAlign:"top"}}>
                    {
                        userAlbumList.map((album, index)=>(
                            <div key={index} style={{
                                margin:"30px",
                                width:"30%",
                                height:"30%",}}>
                                <p style={{fontSize:"20px", fontWeight:"600", fontStyle:"italic"}}>{album.bandName}</p>
                                
                                <div style={{border:"1px solid black", borderRadius:"10px"}}>
                                    <Link to={`/album/edit/${album._id}`}>
                                    <img style={{ width:"50%", height:"50%", borderRadius:"10px", marginTop:"3%"}} src={album.image} alt="image" />
                                    </Link>
                                    <p style={{fontSize:"15px", fontWeight:"600", fontStyle:"italic"}}>{album.albumName}</p>
                                    <p style={{fontSize:"20px", fontWeight:"500", marginLeft:"2%"}}>Era: <span style={{fontSize:"17px", color:"gray", textDecoration:"underline"}}>{album.era}</span></p>
                                    <p style={{fontSize:"20px", fontWeight:"500", marginLeft:"2%"}}>Genre:  <span style={{fontSize:"17px", color:"gray", textDecoration:"underline"}}>{album.genre}</span></p>
                                    <p style={{fontSize:"20px", fontWeight:"500", marginLeft:"2%"}}>Your Rating:  <span style={{fontSize:"17px", color:"gray", textDecoration:"underline"}}>{album.rating}</span></p>
                                </div>
                            </div>
                        
                        ))
                    }
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )

}

export default UserProfile;