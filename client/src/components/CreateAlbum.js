import React, {useState} from "react";
import axios from 'axios';
import Form from './Form';
import {Link, navigate} from '@reach/router';
import Header from "./Header";





const CreateAlbum = (props)=>{

    const [errors, setErrors] = useState({});
    // const {petList, setPetList} = props;

    const[newAlbum, setNewAlbum] = useState({
        bandName: "",
        albumName: "",
        genre: "",
        era: "",
        rating: "",
        // user_id: "",
        // createdByUserName: "",
    });

    const newHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/albums/new',
        newAlbum,
        {
            withCredentials:true
        }
        )
        .then((res) =>{
            console.log(res);
            console.log(res.data);
            navigate('/home')
        })
        .catch((err) =>{
            console.log(err);
            console.log(err.response.data.errors);
            if(err.response.status === 401){
                alert("your not logged in!")
                navigate('/')
            }
            else if(err.response.data.errors){
                setErrors(err.response.data.errors)
            }
        })
    }

    return(
        <div>
            <Header/>
            <div className="flex">
                <h1><u>Music Land</u></h1>
            </div>
            <p><b>What is your favorite album?</b></p>
                <Form album={newAlbum} setAlbum={setNewAlbum} submitHandler={newHandler} buttonText="Add Album!" errors={errors}/>
        </div>
    )
}

export default CreateAlbum;