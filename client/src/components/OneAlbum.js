import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import DeleteAlbum from './DeleteAlbum';

const OneAlbum = (props)=>{

    const [oneAlbum, setOneAlbum] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/albums/${props.id}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setOneAlbum(res.data);
        })
        .catch((err)=>console.log(err));
    }, [])

    return(

        <div>

        
            <p>{oneAlbum.bandName}</p>
            <img src={oneAlbum.image} alt="image" />
            <p>{oneAlbum.albumName}</p>
            <p>{oneAlbum.genre}</p>
            <p>{oneAlbum.era}</p>
            <p>{oneAlbum.rating}</p>
            
            <Link to="/home">Home</Link>
            <DeleteAlbum id={oneAlbum._id} />

            
    
        </div>
    )
}

export default OneAlbum;