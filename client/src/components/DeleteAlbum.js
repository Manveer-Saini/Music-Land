import React from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';



const DeleteAlbum = (props) =>{

    const {id, deleteFilter} = props;

    const deleteHandler =(e) =>{
        axios.delete(`http://localhost:8000/api/albums/${id}`)
        .then((res)=>{
            if(deleteFilter){
                console.log(res.data);
                deleteFilter(id);
            }
            else{
                console.log(res.data);
                navigate("/home");
            }

            deleteFilter(id);
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return(
        <button onClick={deleteHandler}>Delete</button>
    )
}

export default DeleteAlbum;