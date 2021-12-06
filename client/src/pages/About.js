import { React, Fragment } from 'react'
import NavBar from '../components/NavBar'
import AboutHero from '../components/AboutHero'
import Footer from '../components/Footer'

const loggedInMenu = [
    { title: 'Home',link: '/', class: 'nav-links'},
    { title: 'About',link: '/about', class: 'nav-current'},
    { title: 'Log Out',link: '/logout', class: 'nav-links'},
]

const loggedOutMenu = [
    { title: 'Home',link: '/', class: 'nav-links'},
    { title: 'About',link: '/about', class: 'nav-current'},
    { title: 'Log In',link: '/login', class: 'nav-links'},
]

const About = (props) => {
    console.log(`Logged In On About:${props.isLoggedIn}`)
    return (
        <Fragment>
            {props.isLoggedIn && <NavBar menu = { loggedInMenu }/>}
            {!props.isLoggedIn && <NavBar menu = { loggedOutMenu }/>}
            <AboutHero isLoggedIn = { props.isLoggedIn } />
            <Footer />
        </Fragment>
    )
}

export default About