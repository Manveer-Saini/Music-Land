import React, {useState} from "react";
import axios from 'axios';
import Form from './Form';
import {Link, navigate} from '@reach/router';





const CreateAlbum = (props)=>{

    const [errors, setErrors] = useState({});
    // const {petList, setPetList} = props;

    const[newAlbum, setNewAlbum] = useState({
        bandName: "",
        albumName: "",
        genre: "",
        era: "",
        rating: "",
        user_id: "",
        createdByUserName: "",
    });

    const newHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/albums/new',
        newAlbum
        )
        .then((res) =>{
            console.log(res);
            console.log(res.data);
            // setPetList([...petList, res.data]);
            setNewAlbum({
                bandName: "",
                albumName: "",
                genre: "",
                era: "",
                rating: "",
                user_id: "",
                createdByUserName: "",
            });
            navigate('/home');
        })
        .catch((err)=>{
            console.log(err);
            console.log(err.response.data.errors);
            setErrors(err.response.data.errors);
        })
    }

    return(
        <div>
            <div>
                <h1><u>Music Land</u></h1>
                <Link to={'/home'}><button>Back to Home</button></Link>
            </div>
            <p><b>What is your favorite album?</b></p>
            <div className="form">
                <Form album={newAlbum} setAlbum={setNewAlbum} submitHandler={newHandler} buttonText="Add Album!" errors={errors}/>
            </div>
            
        </div>
    )
}

export default CreateAlbum;