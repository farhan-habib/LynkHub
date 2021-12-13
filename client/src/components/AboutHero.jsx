import React, { Fragment } from 'react'
import Button from './Button.jsx'
import './AboutHero.css'

const AboutHero = (props) => {
    return (
        <Fragment>
            <div className="about-hero-container">
                <header className="about-header">About</header>
                <p>With LynkHub you can save all your social media accounts in one place, and share those usernames with anyone through sending them your user-specific code. </p>
                <Button title="Log In to Use" link="/login" />
            </div>
        </Fragment>
    )
}

export default AboutHero