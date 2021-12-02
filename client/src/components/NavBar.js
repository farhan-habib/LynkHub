import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = (props) => {
    console.log(props.menu)
    return (
        // <Fragment>
        //     <h1>LynkHub</h1>
        //     <Link to="/">Home</Link>
        //     <br/>
        //     <Link to="/about">About</Link>
        //     <br/>
        //     <Link to="/profiles">Profiles</Link>
        //     <br/>
        //     <Link to="/myprofile"> My Profile</Link>
        //     <br/>
        //     <Link to="/login">Log In</Link>
        //     <br/>
        //     <Link to="/signup"> SignUp</Link>
        //     <br />
        //     <Link to="/testingerror404">Broken</Link>
        // </Fragment>
        <Fragment>
        <nav className="container">
            <Link className="home-nav-link" to="/"><h1 className="navbar-logo">LynkHub    <i className="fas fa-link" /></h1></Link>
            <ul className='nav-menu'>
                {props.menu.map((item, i) => {
                    return (
                        <li key={i}>
                            <Link className={item.class} to={item.link}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    </Fragment>
    )
}

export default NavBar