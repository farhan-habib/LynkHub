import React, { Fragment } from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <Fragment>
            <section className="footer-container">
                <div className="messages">
                    <p className="copyright">LynkHub © 2021</p>
                </div>
                <div className="social-icons">
                    <a href="https://github.com/f-habibCA/LynkHub">
                        <i className="fab fa-github i" />
                    </a>
                </div>
            </section>
        </Fragment>
    )
}

export default Footer