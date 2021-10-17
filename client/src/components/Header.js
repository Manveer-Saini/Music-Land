import React from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
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
        <header>
            <h1>Welcome To Music Land</h1>
            <ul>
            
                <li><Link className="link" to="/home">Home</Link></li>
                <li><Link className="link" to="/album/new"> New Album</Link></li>
                <li><button onClick={logout}>Logout</button></li>
            </ul>
        </header>
    )
}
export default Header;