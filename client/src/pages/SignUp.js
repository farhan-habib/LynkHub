import { React, Fragment } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import './SignUp.css'


const loggedInMenu = [
    { title: 'Home',link: '/', class: 'nav-links'},
    { title: 'About',link: '/about', class: 'nav-links'},
    { title: 'Log Out',link: '/logout', class: 'nav-links'},
]

const loggedOutMenu = [
    { title: 'Home',link: '/', class: 'nav-links'},
    { title: 'About',link: '/about', class: 'nav-links'},
    { title: 'Sign Up',link: '/signup', class: 'nav-current'},
]

const SignUp = (props) => {
    console.log(`Logged In On LogIn:${props.isLoggedIn}`)
    return (
        <Fragment>
            {props.isLoggedIn && <NavBar menu = { loggedInMenu }/>}
            {!props.isLoggedIn && <NavBar menu = { loggedOutMenu }/>}
                <container className="signup-container">
                    <div className="signup-wrapper">
                        <form action="" className="form">
                            <img src="images/avatar.png" alt="" />
                            <h2>Sign Up</h2>
                            <div className="input-group">
                                <input type="text" name="signinUsername" id="signinUsername" required />
                                <label>Username</label>
                            </div>
                            <div className="input-group">
                                <input type="password" name="signinPassword" id="signinPassword" required />
                                <label>Password</label>
                            </div>
                            <div className="input-group">
                                <input type="password" name="confirmsigninPassword" id="confirmsigninPassword" required />
                                <label>Confirm Password</label>
                            </div>
                            <div className="signup-btn" onClick={() => props.setLoggedIn(true)}>Sign Up</div>
                            {/* <input type="submit" value="Login" className="submit-btn" /> */}
                        </form>
                    </div>
                </container>
            <Footer />
        </Fragment>
    )
}

export default SignUp