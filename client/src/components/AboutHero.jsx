import React, { Fragment } from 'react'
import Button from './Button.jsx'
import './AboutHero.css'

const AboutHero = (props) => {
    return (
        <Fragment>
            <div className="about-hero-container">
                <header className="about-header">About</header>
                <p>Ad eiusmod culpa enim laborum Lorem adipisicing exercitation do.</p>
                {!props.loggedIn && <Button title="Log In to Use" link="/login" />}
            </div>
        </Fragment>
    )
}

export default AboutHero