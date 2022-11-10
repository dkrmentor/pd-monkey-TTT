import React from 'react'
import Nav from 'react-bootstrap/Nav';
import "../../App.css";
import MultiItemCarousl from '../../Components/Carousels/MultiItemCarousel';
import hero from '../../Images/hero.png';
import logos from '../../Images/logos.jpg';
import thumbnail01 from '../../Images/thumbnail01.png';
import thumbnail02 from '../../Images/thumbnail02.png';
import thumbnail03 from '../../Images/thumbnail03.png';


const Section1 = () => {
    return (
        <>          
          <div className="first-section container">
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


            <div className='second-section'>

                <div className='container text-center getstart'>
                    <p className='getstart-heading '>
                        SELECT A PRODUCT TO
                        <span className='theme-primary-color'>
                            GET STARTED

                        </span>
                    </p>

                </div>





        {/* /********** Services Section Start ********** / */}  
        <section id="services-slider-sec">
          <div className="container">
          <MultiItemCarousl />
          </div>
        </section>
        {/* /********** Services Section end ********** / */}  
        {/* /********** Truested Section Start ********** / */}  
        <section id="trusted-sec">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2">
              </div>
              <div className="col-md-7">
                <div className="trst-txt-div">
                  <p><span>30</span> Day Satisfaction Guarantee</p>
                  <h3>Get On-Demand Episode Editing For a Flat Monthly Rate</h3>
                  <p className="gap">Instantly hire a team of <span>professional editors, writers, designers</span> for your podcast. The #1 place for your podcasting needs. Unlimited orders and revisions. Pay monthly and cancel anytime.</p>
                  <p>No Contracts. Just <span>Fast Service.</span></p>
                </div>
              </div>
              <div className="col-md-3">
              </div>
            </div>
          </div></section>
        {/* /********** About us Section started ********** / */} 
        <section id="about-us">
          <div className="container">
            <div className="row">
              <div className="txt-div">
                <h4>1,000+ satisfied parents</h4>
                <h2>Hear What Our Families <br /> Say <span>About Us</span></h2>
                <p>Our editors will ensure your episodes sound professional. Audio cleaning, multitrack syncing, EQ, voice balancing, noise reduction are just some of the important &amp; necessary techniques for a good listening experience. We want your podcast to sound as good as the best podcasters out there.</p>
              </div>
              <div className="col-md-4">
                <div className="-thumbniel-div">
              
                  <img src={thumbnail01} alt="thumbnail01" />

                </div>
              </div>
              <div className="col-md-4">
                <div className="-thumbniel-div">
                 
                  <img src={thumbnail02} alt="thumbnail02" />

                </div>
              </div>
              <div className="col-md-4">
                <div className="-thumbniel-div">
                 
                  <img src={thumbnail03} alt="thumbnail03" />

                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /********** About us Section end ********** / */}   
    










            </div>
        </>

    )
}

export default Section1



