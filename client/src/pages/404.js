import { React, Fragment } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import './404.css'


const Error404 = () => {
    return (
        <Fragment>
            <NavBar />
            <h1>Error 404 Page Not found</h1>
            <Footer />
        </Fragment>
    )
}

export default Error404