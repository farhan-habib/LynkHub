import { React, Fragment } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
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
                                <input type="text" name="loginUser" id="loginUser" required /> 
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