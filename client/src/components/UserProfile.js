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
            <h1>Welcome to {userPage.username}'s Profile!</h1>
            <div style={{textAlign:"center", width: "90%", margin:"auto" ,display: "flex", flexDirection: "row"}}>
                <div style={{textAlign:"center", width: "40%", margin:"auto"}}>
                    <h3> User Profile</h3>
                    <table className="table table-stripe">
                        <tbody>
                        <tr><td>First Name:</td> <td>{userPage.firstName} </td></tr>
                        <tr><td>Last Name:</td> <td>{userPage.lastName}</td></tr>
                        <tr><td>Username:</td> <td>{userPage.username}</td></tr>
                        </tbody>
                        </table>


                </div>
                <div style={{textAlign:"center", width: "60%", margin:"auto"}}>
                    <h3>Your favorite albums: </h3>
                    <div style={{textAlign:"center", width: "70%", margin:"auto" ,display: "flex", flexDirection: "row", justifyContent: "flex start"}}>
                    {
                        userAlbumList.map((album, index)=>(
                            <div key={index} style={{
                                margin:"30px",
                                width:"30%",
                                height:"30%",}}>
                                <p>{album.bandName}</p>
                                <Link to={`/album/edit/${album._id}`}>
                                <img style={{ width:"29%", height:"29%", borderRadius:"10px"}} src={album.image} alt="image" />
                                </Link>
                                <p style={{fontSize:"20px", fontWeight:"500", marginLeft:"2%"}}>Era: <span style={{fontSize:"17px", color:"gray", textDecoration:"underline"}}>{album.era}</span></p>
                                <p style={{fontSize:"20px", fontWeight:"500", marginLeft:"2%"}}>Genre:  <span style={{fontSize:"17px", color:"gray", textDecoration:"underline"}}>{album.genre}</span></p>
                                <p style={{fontSize:"20px", fontWeight:"500", marginLeft:"2%"}}>Your Rating:  <span style={{fontSize:"17px", color:"gray", textDecoration:"underline"}}>{album.rating}</span></p>
                            </div>
                        
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    )

}

export default UserProfile;