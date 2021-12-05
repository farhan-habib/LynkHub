import React, { Fragment, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const loggedInMenu = [
    { title: 'Home',link: '/', class: 'nav-current', props: {}},
    { title: 'Log Out',link: '/logout', class: 'nav-links', props: {}},
]

const loggedOutMenu = [
    { title: 'Home',link: '/', class: 'nav-current'},
    { title: 'Log In',link: '/login', class: 'nav-links'},
]

const switchAccountState = () => {

}

const Home = (props) => {
    console.log(props.isLoggedIn)
    return (
        <Fragment>
            {props.isLoggedIn && <NavBar menu = { loggedInMenu }/>}
            {!props.isLoggedIn && <NavBar menu = { loggedOutMenu }/>}
            <button onClick={switchAccountState}>
                Switch
            </button>
            <Footer />
        </Fragment>
    )
}

export default Home