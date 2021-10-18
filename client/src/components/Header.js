import React from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import musicland_lg from '../images/musicland_lg.jpg';

const Header = (props) => {

    const logout = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/users/logout", { 
            // no body required for this request
        }, {
            withCredentials: true,
        })
        .then((res) => {
            console.log(res.data);
            navigate("/");
        })
        .catch(err => {
            console.log(err);
        });
    };

    return (
        <header style={{ display:'flex', justifyContent:'space-around'}}> 
            <img src={musicland_lg} alt="logo"></img>    
            
            <ul>
                <li><Link className="link" to="/home">Home</Link></li> 
                <br/>
                <li><Link className="link" to="/album/new"> New Album</Link></li> 
                <br/>
                <br/>
                <li><button onClick={logout} type="button" class="btn btn-dark">Logout</button></li>
            </ul>
        </header>
    )
}
export default Header;