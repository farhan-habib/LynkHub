import React, { Fragment } from 'react'
import NavBar from '../components/NavBar.jsx'
import HomeHero from '../components/HomeHero.jsx'
import Footer from '../components/Footer.jsx'

const loggedInMenu = [
    { title: 'About',link: '/about', class: 'nav-links'},
    { title: 'MyProfile',link: '/myprofile', class: 'nav-links'},
    { title: 'Log Out',link: '/logout', class: 'nav-links'},
]

const loggedOutMenu = [
    { title: 'About',link: '/about', class: 'nav-links'},
    { title: 'Log In',link: '/login', class: 'nav-links'},
]


const Home = (props) => {
    console.log(`Logged In On Home:${props.isLoggedIn}`)
    return (
        <Fragment>
            {props.isLoggedIn && <NavBar menu = { loggedInMenu }/>}
            {!props.isLoggedIn && <NavBar menu = { loggedOutMenu }/>}
            <HomeHero />
            <Footer />
        </Fragment>
    )
}

export default Home