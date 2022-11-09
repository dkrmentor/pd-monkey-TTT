import React from 'react'
import Nav from 'react-bootstrap/Nav';

const Section1 = () => {
    return (
        <div className="container text-center">
            <div>
                <h1>
                    Unlimited
                    <br />
                    Podcast Editing
                </h1>
                <p>
                    We're your podcast editing partner!
                    <br />
                    Record more and let us handle the rest. Get ready to save time and grow
                    <br />
                    your show!
                </p>
            </div>


            <Nav className="justify-content-center">
                <Nav.Link style={{ maxWidth: '20em' }} className="getStartedButton theme-primary" href="#getstarted">GET STARTED</Nav.Link>
            </Nav>

            <img src= "" /> 
           
        </div>

    )
}

export default Section1



