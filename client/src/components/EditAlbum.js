import React, {useState, useEffect} from "react";
import {navigate} from '@reach/router';
import axios from 'axios';
import Form from './Form';
import {Link} from '@reach/router';
import Header from "./Header";



const EditAlbum = (props)=>{

    const[errors, setErrors] = useState({});
    const[updatedAlbum, setUpdatedAlbum] = useState({
        bandName: "",
        albumName: "",
        genre: "",
        era: "",
        rating: "",
    });
    const {id} = props;


useEffect(()=>{
    axios.get(`http://localhost:8000/api/albums/${id}`)
    .then((res)=>{
        console.log(res.data);
        setUpdatedAlbum(res.data);
    })
    .catch((err)=>{
        alert("I am inside of the .get")
        console.log(err);
    })
}, [])





    const updateHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/albums/${id}`,
        updatedAlbum
        )
        .then((res) =>{
            console.log(res);
            console.log(res.data);
            navigate("/home");
        })
        .catch((err)=>{
            console.log(err);
            console.log(err.response.data.errors);
            setErrors(err.response.data.errors);
        })
    }

    return(
        <div>
            <Header/>
            <div className="dashboard">
                <div className="edit-album">
                    <h1>Edit {updatedAlbum.albumName}</h1>
                    <img className="edit-album-pic" src={updatedAlbum.image} alt="image"/>
                    <Form album={updatedAlbum} setAlbum={setUpdatedAlbum} buttonText="Edit Album" submitHandler={updateHandler} errors={errors} />
                </div>
            </div>
        </div>
    )
}

export default EditAlbum;