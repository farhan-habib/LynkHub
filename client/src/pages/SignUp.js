import { React, Fragment } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const MenuItems = [
    { title: 'Home',link: '/', class: 'nav-links'},
    { title: 'About',link: '/about', class: 'nav-links'},
    { title: 'Profiles',link: '/profiles', class: 'nav-links'},
    { title: 'My Profile',link: '/myprofile', class: 'nav-links'},
    { title: 'Log In',link: '/login', class: 'nav-links'},
    { title: 'Sign Up',link: '/signup', class: 'nav-current'},
]

const SignUp = () => {
    return (
        <Fragment>
            <NavBar menu = { MenuItems }/>
                <h1>SignUp</h1>
            <Footer />
        </Fragment>
    )
}

export default SignUp