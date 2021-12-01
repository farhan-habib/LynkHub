import  { React, Fragment } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <Fragment>
            <h1>LynkHub</h1>
            <Link to="/">Home</Link>
            <br/>
            <Link to="/about">About</Link>
            <br/>
            <Link to="/profiles">Profiles</Link>
            <br/>
            <Link to="/myprofile"> My Profile</Link>
            <br/>
            <Link to="/login">Log In</Link>
            <br/>
            <Link to="/signup"> SignUp</Link>
            <br />
            <Link to="/testingerror404">Broken</Link>
        </Fragment>
    )
}

export default NavBar