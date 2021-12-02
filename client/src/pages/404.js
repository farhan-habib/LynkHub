import { React, Fragment } from 'react'
import NavBar from '../components/NavBar'
import ErrorHero from '../components/ErrorHero'
import Footer from '../components/Footer'

const MenuItems = [
    { title: 'Home',link: '/', class: 'nav-links'},
    { title: 'About',link: '/about', class: 'nav-links'},
    { title: 'Profiles',link: '/profiles', class: 'nav-links'},
    { title: 'MyProfile',link: '/myprofile', class: 'nav-links'},
    { title: 'LogIn',link: '/login', class: 'nav-links'},
    { title: 'SignUp',link: '/signup', class: 'nav-links'},
]

const Error404 = () => {
    return (
        <Fragment>
            <NavBar menu= { MenuItems } />
            <ErrorHero />
            <Footer />
        </Fragment>
    )
}

export default Error404