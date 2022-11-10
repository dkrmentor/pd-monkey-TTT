import React from 'react'
import "./Footer.css"
import Nav from 'react-bootstrap/Nav';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import footerLogo from '../Images/footerLogo.png';


const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="bg-dark ">


<div className='container'>
<img className='ftr-logo' src={footerLogo} alt="Logo" />

</div>


        <section className="container top-footer ">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <div className='sec-1'>
                <h4>  Ready To Get <br /> Started </h4>

                <Nav >
                  <Nav.Link className="getStartedButton theme-primary" href="#getstarted">GET STARTED</Nav.Link>
                </Nav>
              </div>


            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Services</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!">Podcast Editing</a>
                </li>
                <li>
                  <a href="#!">Video Podcast Editing</a>
                </li>

              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Resources</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!">Pricing</a>
                </li>
                <li>
                  <a href="#!">Blog</a>
                </li>
                <li>
                  <a href="#!">Dashboard</a>
                </li>

              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Help</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!">FAQS</a>
                </li>
                <li>
                  <a href="#!">Contact Us</a>
                </li>
                <li>
                  <a href="#!">Login</a>
                </li>

              </ul>
            </div>

          </div>

        </section>



        {/* Copyright */}

        <section className='container bottom-footer py-4'>
          <div className='row'>



            <div className="col-lg-6 col-md-6">

              <a href="#!">Privacy Policy</a>
              <span className='mx-1'>
                |
              </span>
              <a href="#!">Terms & Conditions</a>



            </div>
            <div className="icons col-lg-4 col-md-4">




              <a className="m-0 btn " href="#!" role="button"> <FaFacebookF size="1.2rem" color='white' /></a>
              <a className="m-0 btn " href="#!" role="button"><BsTwitter size="1.2rem" color='white' /></a>
              <a className="m-0 btn " href="#!" role="button"><AiOutlineInstagram size="1.2rem" color='white' /></a>



            </div>

          </div>
        </section>




      </footer>

    </>
  )
}

export default Footer
