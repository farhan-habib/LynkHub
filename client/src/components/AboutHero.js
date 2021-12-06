import React, { Fragment } from 'react'
import Button from './Button'
import './AboutHero.css'

const AboutHero = (props) => {
    return (
        <Fragment>
            <div className="about-hero-container">
                <header className="about-header">About</header>
                <p>Ad eiusmod culpa enim laborum Lorem adipisicing exercitation do.</p>
                {!props.isLoggedIn && <Button title="Go Home" link="/" />}
            </div>
        </Fragment>
    )
}

export default AboutHero