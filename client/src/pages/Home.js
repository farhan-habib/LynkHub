import { React, Fragment } from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/HeroSection'
import Footer from '../components/Footer'
import './Home.css'


const Home = () => {
    return (
        <Fragment>
            <NavBar />
            <Hero />
            <Footer />
        </Fragment>
    )
}

export default Home