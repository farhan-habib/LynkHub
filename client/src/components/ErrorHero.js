import React, { Fragment } from 'react'
import Button from './Button'
import './ErrorHero.css'

const ErrorHero = () => {
    return (
        <Fragment>
            <div className="err-hero-container">
                <header className="header">Error 404                                        <i className="fas fa-exclamation" /></header>
                <Button title="Go Home" link="/" />
            </div>
        </Fragment>
    )
}

export default ErrorHero