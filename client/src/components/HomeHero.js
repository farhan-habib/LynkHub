import React, { Fragment } from 'react'
import Button from './Button'
import './HomeHero.css'

const HomeHero = () => {
    return (
        <Fragment>
            <section className="home-wrapper">
                <div className="spacer layer1 flip" />
                    <section className="section">
                    <header className="home-header">LynkHub</header>
                    <p>Exercitation esse aute proident sunt occaecat cillum do.</p>
                    </section>
                <div className="spacer layer1" />
            </section>
        </Fragment>
    )
}

export default HomeHero