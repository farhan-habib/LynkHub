import React, { Fragment } from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/HeroSection'
import Footer from '../components/Footer'

const MenuItems = [
    { title: 'Home',link: '/', class: 'nav-current'},
    { title: 'About',link: '/about', class: 'nav-links'},
    { title: 'Profiles',link: '/profiles', class: 'nav-links'},
    { title: 'My Profile',link: '/myprofile', class: 'nav-links'},
    { title: 'Log In',link: '/login', class: 'nav-links'},
    { title: 'Sign Up',link: '/signup', class: 'nav-links'},
]

const Home = () => {
    return (
        <Fragment>
            <NavBar menu = { MenuItems }/>
            <Hero />
            <Footer />
        </Fragment>
    )
}

export default Home