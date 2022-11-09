import React from 'react'
import Nav from 'react-bootstrap/Nav';
import "../../App.css";
import hero from '../../Images/hero.png';
import logos from '../../Images/logos.jpg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Section1 = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


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




            <div className='container'>
                <Carousel responsive={responsive}>
                    <div>Item 1</div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                    <div>Item 4</div>
                </Carousel>
            </div>



        </div>

    )
}

export default Section1



