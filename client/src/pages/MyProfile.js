import { React, Fragment } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const MenuItems = [
    { title: 'Home',link: '/', class: 'nav-links'},
    { title: 'About',link: '/about', class: 'nav-links'},
    { title: 'Profiles',link: '/profiles', class: 'nav-links'},
    { title: 'My Profile',link: '/myprofile', class: 'nav-current'},
    { title: 'Log In',link: '/login', class: 'nav-links'},
    { title: 'Sign Up',link: '/signup', class: 'nav-links'},
]

const MyProfile = () => {
    return (
        <Fragment>
            <NavBar menu = { MenuItems }/>
                <h1>MyProfile</h1>
            <Footer />
        </Fragment>
    )
}

export default MyProfile