import { React, Fragment } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import './LogOut.css'

const loggedInMenu = [
    { title: 'About',link: '/about', class: 'nav-links'},
    { title: 'Log Out',link: '/logout', class: 'nav-current'},
]

const loggedOutMenu = [
    { title: 'About',link: '/about', class: 'nav-links'},
    { title: 'Log In',link: '/login', class: 'nav-current'},
]


const LogOut = (props) => {
    console.log(`Logged In On LogOut:${props.isLoggedIn}`)
    return (
        <Fragment>
            {props.isLoggedIn && <NavBar menu = { loggedInMenu }/>}
            {!props.isLoggedIn && <NavBar menu = { loggedOutMenu }/>}
                <container className="logout-container">
                    <div className="logout-wrapper">
                        <div className="form">
                            <div className="logout-btn" onClick={() => props.setLoggedIn(false)}>Log Out</div>
                        </div>
                    </div>
                </container>
            <Footer />
        </Fragment>
    )
}

export default LogOut