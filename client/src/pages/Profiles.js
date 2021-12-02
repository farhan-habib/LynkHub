import { React, Fragment } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const MenuItems = [
    { title: 'Home',link: '/', class: 'nav-links'},
    { title: 'About',link: '/about', class: 'nav-links'},
    { title: 'Profiles',link: '/profiles', class: 'nav-current'},
    { title: 'My Profile',link: '/myprofile', class: 'nav-links'},
    { title: 'Log In',link: '/login', class: 'nav-links'},
    { title: 'Sign Up',link: '/signup', class: 'nav-links'},
]

const Profiles = () => {
    return (
        <Fragment>
            <NavBar menu = { MenuItems }/>
                <h1>Profiles</h1>
            <Footer />
        </Fragment>
    )
}

export default Profiles