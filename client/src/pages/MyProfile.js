import { React, Fragment } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import './MyProfile.css'


const MyProfile = () => {
    return (
        <Fragment>
            <NavBar />
                <h1>MyProfile</h1>
            <Footer />
        </Fragment>
    )
}

export default MyProfile