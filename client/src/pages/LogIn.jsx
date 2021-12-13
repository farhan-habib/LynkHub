import { React, Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import './LogIn.css'


const loggedInMenu = [
    { title: 'About',link: '/about', class: 'nav-links'},
    { title: 'Log Out',link: '/logout', class: 'nav-links'},
]

const loggedOutMenu = [
    { title: 'About',link: '/about', class: 'nav-links'},
    { title: 'Log In',link: '/login', class: 'nav-current'},
]

const LogIn = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitForm = async e => {
    e.preventDefault();
        try {
            const body = { username, password };
            const response = await fetch(
            "http://localhost:5000/todos",
            {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            }
        );
        } catch (err) {
            console.error(err.message);
        }
    };

    console.log(`Logged In On LogIn:${props.isLoggedIn}`)
    return (
        <Fragment>
            {props.isLoggedIn && <NavBar menu = { loggedInMenu }/>}
            {!props.isLoggedIn && <NavBar menu = { loggedOutMenu }/>}
                <container className="login-container">
                    <div className="login-wrapper">
                        <form action="" className="form">
                            <img src="images/avatar.png" alt="" />
                            <header>Log In</header>
                            <div className="input-group">
                                <input type="text" required /> 
                                <label>Username</label>
                            </div>
                            <div className="input-group">
                                <input type="password" name="loginPassword" id="loginPassword" required />
                                <label>Password</label>
                            </div>
                            <div className="login-btn" onClick={() => props.setLoggedIn(true)}>Log In</div>
                            <div className="signup-link-wrapper">
                                <div className="singup-link-btn">Don't Have an account? <Link to="/signup" className="signup-link">Sign Up.</Link></div>
                            </div>
                            {/* <input type="submit" value="Login" className="submit-btn" /> */}
                        </form>
                    </div>
                </container>
            <Footer />
        </Fragment>
    )
}

export default LogIn