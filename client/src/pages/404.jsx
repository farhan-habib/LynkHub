import { React, Fragment } from 'react'
import NavBar from '../components/NavBar.jsx'
import ErrorHero from '../components/ErrorHero.jsx'
import Footer from '../components/Footer.jsx'

const MenuItems = [
    { title: 'Home',link: '/', class: 'nav-links'},
]

const Error404 = (props) => {
    console.log(`Logged In On 404:${props.isLoggedIn}`)
    return (
        <Fragment>
            <NavBar menu= { MenuItems } />
            <ErrorHero />
            <Footer />
        </Fragment>
    )
}

export default Error404