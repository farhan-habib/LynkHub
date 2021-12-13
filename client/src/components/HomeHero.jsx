import React, { Fragment } from 'react'
import Button from './Button.jsx'
import './HomeHero.css'

const HomeHero = () => {
    return (
        <Fragment>
            <section className="home-wrapper">
                <div className="spacer layer1 flip" />
                    <section className="section">
                        <header className="home-header">LynkHub</header>
                        <p>The Ultimate Site for Saving and Sharing Your Socials</p>
                        <Button link="/about" title="Click to Learn More" />
                    </section>
                <div className="spacer layer1" />
            </section>
        </Fragment>
    )
}

export default HomeHero