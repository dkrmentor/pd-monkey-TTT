import React from 'react'
import Nav from 'react-bootstrap/Nav';
import "../../App.css";
import hero from '../../Images/hero.png';
import logos from '../../Images/logos.jpg';


const Section1 = () => {
    return (
        <div className="sec1">
            <div className="main-view container">
                <div>
                    <h1>
                        Unlimited
                        <br />
                        Podcast <span className='theme-primary-color'> Editing
                        </span>
                    </h1>
                    <p>
                        We're your podcast editing partner!
                        <br />
                        Record more and let us handle the rest. Get ready to save time
                        <br />
                        and grow your show!
                    </p>
                </div>


                <Nav className="justify-content-center main-button">
                    <Nav.Link className="getStartedButton theme-primary" href="#getstarted">GET STARTED</Nav.Link>
                </Nav>

                <img src={hero} alt="hero" />



            </div>

            <div className='container home-logos'>
                <img src={logos} alt="logos" />

            </div>

            <div className='container text-center getstart'>
                <p className='getstart-heading '>
                SELECT A PRODUCT TO 
                <span className='theme-primary-color'>
                  GET STARTED

                </span>
                </p>

            </div>



        </div>

    )
}

export default Section1



