import React, { useState } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav'
import Container from "react-bootstrap/esm/Container";
import { Link } from "@reach/router";



const Register = (props) => {
    const [confirmReg, setConfirmReg] = useState("");
    const [errs, setErrs] = useState({});

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    // using a single function to update the state object
    //    we can use the input's name attribute as the key in to the object
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const register = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/users/register",
            user,  // the user state is already an object with the correct keys and values!
            {
                // this will force the sending of the credentials / cookies so they can be updated
                //    XMLHttpRequest from a different domain cannot set cookie values for their own domain 
                //    unless withCredentials is set to true before making the request
                withCredentials: true,
            }

        )
            .then(res => {
                console.log(res.data);
                // when we successfully created the account, reset state for registration form
                //    We do this if we are NOT navigating automatically away from the page
                setUser({
                    firstName: "",
                    lastName: "",
                    username: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                })
                setConfirmReg("Thank you for Registering, you can now log in!");
                setErrs({});  // remember to reset errors state if it was successful
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response);
                setErrs(err.response.data.errors);
            });
    };

    return (
        <div>
            <div className="flex">
                <div className="flex_column1">
                    <video className="flex_column1_video" muted loop={true} autoPlay={true} >
                        <source src="./videos/front-page.mp4" type="video/mp4" />
                    </video>
                    <div className="flex_column1_content">
                        <div className="flex_column1_content-text">
                        <h1>Welcome To</h1>
                        <h1 className="text-center">Music Land</h1>
                        </div>
                    </div>
                </div>
                <div className="flex_column2" style={{ backgroundImage: "url(/images/front-page.jpg)", backgroundSize: "cover", backgroundPosition: "center center" }}>
                    <div className="flex_column2_content">
                        <div className="flex_column2_content-text">
                            <h1 className="text-center mb-3">Start Sharing Your Favorite Music</h1>
                            <Row>
                                <Col>
                                    {
                                        confirmReg ?
                                            <h4 style={{ color: "green" }}>{confirmReg}</h4>
                                            : null
                                    }
                                    <Form onSubmit={register}>
                                        <Row className="mb-3">
                                            <Form.Group as={Col}>
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="firstName"
                                                    placeholder="First Name"
                                                    value={user.firstName}
                                                    onChange={(e) => handleChange(e)}
                                                />
                                                <br />
                                                {
                                                    errs.firstName ?
                                                        <span className="error-text" style={{ color: "red" }}>{errs.firstName.message}</span>
                                                        : null
                                                }
                                            </Form.Group>
                                            <Form.Group as={Col}>
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="lastName"
                                                    placeholder="Last Name"
                                                    value={user.lastName}
                                                    onChange={(e) => handleChange(e)}
                                                />
                                                <br />
                                                {
                                                    errs.lastName ?
                                                        <span className="error-text" style={{ color: "red" }}>{errs.lastName.message}</span>
                                                        : null
                                                }
                                            </Form.Group>
                                        </Row>
                                        <Form.Group>
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="username"
                                                placeholder="Username"
                                                value={user.username}
                                                onChange={(e) => handleChange(e)}
                                            />
                                            <br />
                                            {
                                                errs.username ?
                                                    <span className="error-text" style={{ color: "red" }}>{errs.username.message}</span>
                                                    : null
                                            }
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="email"
                                                placeholder="Email"
                                                value={user.email}
                                                onChange={handleChange}
                                            />
                                            {
                                                errs.email ?
                                                    <span className="error-text" style={{ color: "red" }}>{errs.email.message}</span>
                                                    : null
                                            }
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Password</Form.Label>
                                            {
                                                errs.password ?
                                                    <span className="error-text" style={{ color: "red" }}>{errs.password.message}</span>
                                                    : null
                                            }
                                            <Form.Control
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                value={user.password}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Confirm Password</Form.Label>
                                            {
                                                errs.confirmPassword ?
                                                    <span className="error-text" style={{ color: "red" }}>{errs.confirmPassword.message}</span>
                                                    : null
                                            }
                                            <Form.Control
                                                type="password"
                                                name="confirmPassword"
                                                placeholder="Confirm Password"
                                                value={user.confirmPassword}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                        <div className="center d-grid gap-2">
                                            <Button variant="primary" size="lg" type="submit">
                                                Submit
                                            </Button>
                                            <Link to="/Login">Already Have an Account? Login</Link>
                                        </div>
                                    </Form>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;