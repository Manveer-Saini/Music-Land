import React, { useState, useEffect } from "react";
import { navigate } from '@reach/router';
import axios from 'axios';
import Form from './Form';
import { Link } from '@reach/router';

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
<div style={{textAlign:"center"}}>
            <h1>Welcome to {userPage.username}'s Profile!</h1>

            {
                userAlbumList.map((album, index)=>(
                    <div key={index}>
                        <p>{album.name}</p>
                        <img src={album.image} alt="image" />
                        <p>{album.era}</p>
                        <p>{album.genre}</p>
                        <p>{album.rating}</p>
                    </div>
                ))
            }

        </div>
    )

}

export default UserProfile;