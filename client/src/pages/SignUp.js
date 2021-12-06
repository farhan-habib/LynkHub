import { React, Fragment } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const SignUp = (props) => {
    console.log(`Logged In On SignUp:${props.isLoggedIn}`)
    return (
        <Fragment>
            <NavBar/>
            <Footer />
        </Fragment>
    )
}

export default SignUp