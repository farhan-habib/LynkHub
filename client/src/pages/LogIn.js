import { React, Fragment } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import './LogIn.css'


const MenuItems = [
    { title: 'Home',link: '/', class: 'nav-links'},
    { title: 'Sign Up',link: '/signup', class: 'nav-links'},
]

const LogIn = (props) => {
    console.log(props.isLoggedIn)
    return (
        <Fragment>
            <NavBar menu = { MenuItems } />
                <container className="login-container">
                    <div class="login-wrapper">
                        <form action="" class="form">
                            <img src="images/avatar.png" alt="" />
                            <h2>Log In</h2>
                            <div class="input-group">
                                <input type="text" name="loginUser" id="loginUser" required />
                                <label for="loginUser">Username</label>
                            </div>
                            <div class="input-group">
                                <input type="password" name="loginPassword" id="loginPassword" required />
                                <label for="loginPassword">Password</label>
                                </div>
                            <input type="submit" value="Login" class="submit-btn" />
                        </form>
                    </div>
                </container>
            <Footer />
        </Fragment>
    )
}

export default LogIn