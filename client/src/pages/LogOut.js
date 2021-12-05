import { React, Fragment } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const MenuItems = [
    { title: 'Home',link: '/', class: 'nav-links'},
    { title: 'Log Out',link: '/logout', class: 'nav-current'}
]
const handleClick = () => {
    console.log("CLICKED")
}

const LogIn = (props) => {
    console.log(props.isLoggedIn)
    return (
        <Fragment>
            <NavBar menu={ MenuItems }/>
            <Footer />
        </Fragment>
    )
}

export default LogIn