import React from 'react'
import Card from 'react-bootstrap/Card';
import man from '../../Images/man.png';
import Nav from 'react-bootstrap/Nav';

const Section2 = () => {
  return (
    <div className='second2'>
      <div className="container">
        <div className="row">
          <div className="txt-div">
            <h4>Process</h4>
            <h2>How Does It Work <span>?</span></h2>
          </div>
        </div>

        <div className='cards-container'>

          <div className='container d-flex sec-cards'>
            <Card className="sec2card first-card" >
              <Card.Body className='card-content'>
                <Card.Title className='title'>Record & send us your files</Card.Title>
                <Card.Text className='text'>
                  Make a request & send us your footage, audio & editing instruct
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="sec2card second-card" >
              <Card.Body className='card-content'>
                <Card.Title className='title'>Record & send us your files</Card.Title>
                <Card.Text className='text'>
                  Make a request & send us your footage, audio & editing instruct
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="sec2card third-card" >
              <Card.Body className='card-content'>
                <Card.Title className='title'>Record & send us your files</Card.Title>
                <Card.Text className='text'>
                  Make a request & send us your footage, audio & editing instruct
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className='sec-card2'>

          </div>


        </div>





      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
          </div>
          <div className="col-md-3 ">
            <div className=" trst-txt-div2 spacing">
              <p><span>professional</span></p>
              <h3>Hire Your <br /> <span> Professional </span> <br /> Editor Today  </h3>



              <p className="gap2">Your Personal Editor</p>
              <p>Get assigned your own professional editor who's dedicated to knowing you & your PODCAST.</p>

              <p className="gap2">Your Personal Editor</p>
              <p>Get assigned your own professional editor who's dedicated to knowing you & your PODCAST.</p>


              <Nav className="main-button">
                <Nav.Link className="getStartedButton theme-primary" href="#getstarted">GET STARTED</Nav.Link>
              </Nav>

            </div>

          </div>
          <div className="carousel2 col-md-5 man-img spacing">
            <img src={man} alt="man" />

          </div>
        </div>
      </div>

      <div className='container'>

        <div className="container">
          <div className="txt-div">
            <h4> <span>Our Pricing</span></h4>
            <h2>Services To Make Your Podcast
              Look And Sound Amazing</h2>

          </div>

          <div className='container d-flex sec-cards'>


            <Card className="pkg-card" >
              <Card.Body className='card-content'>
                <Card.Title className='title'> Video Podcast
                  Editing</Card.Title>
                <Card.Text className='text'>
                  <p>
                    Enhance your Riverside.fm or Zoom recordings into slick video podcasts
                  </p>
                  <hr />
                  <ul>
                    <li>
                      Audio Optimization  </li>
                    <li>Color Correction</li>
                    <li>Unlimited Revisions</li>
                    <li>Clips pulled for social media</li>
                    <li>Thumbnail Creation for YouTube</li>
                    <li>Intro & Outros added</li>
                    <li>Lower thirds animations & transitions</li>
                    <li>Captions</li>

                  </ul>

                  <Nav className="justify-content-center">
                    <Nav.Link className="getStartedButton theme-primary" href="#getstarted">GET STARTED</Nav.Link>
                  </Nav>
                </Card.Text>

              </Card.Body>
            </Card>
            <Card className="pkg-card" >
              <Card.Body className='card-content'>
                <Card.Title className='title'> Video Podcast
                  Editing</Card.Title>
                <Card.Text className='text'>
                  <p>
                    Enhance your Riverside.fm or Zoom recordings into slick video podcasts
                  </p>
                  <hr />
                  <ul>
                    <li>
                      Audio Optimization  </li>
                    <li>Color Correction</li>
                    <li>Unlimited Revisions</li>
                    <li>Clips pulled for social media</li>
                    <li>Thumbnail Creation for YouTube</li>
                    <li>Intro & Outros added</li>
                    <li>Lower thirds animations & transitions</li>
                    <li>Captions</li>

                  </ul>

                  <Nav className="justify-content-center">
                    <Nav.Link className="getStartedButton theme-primary" href="#getstarted">GET STARTED</Nav.Link>
                  </Nav>
                </Card.Text>

              </Card.Body>
            </Card>
            <Card className="pkg-card" >
              <Card.Body className='card-content'>
                <Card.Title className='title'> Video Podcast
                  Editing</Card.Title>
                <Card.Text className='text'>
                  <p>
                    Enhance your Riverside.fm or Zoom recordings into slick video podcasts
                  </p>
                  <hr />
                  <ul>
                    <li>
                      Audio Optimization  </li>
                    <li>Color Correction</li>
                    <li>Unlimited Revisions</li>
                    <li>Clips pulled for social media</li>
                    <li>Thumbnail Creation for YouTube</li>
                    <li>Intro & Outros added</li>
                    <li>Lower thirds animations & transitions</li>
                    <li>Captions</li>

                  </ul>

                  <Nav className="justify-content-center">
                    <Nav.Link className="getStartedButton theme-primary" href="#getstarted">GET STARTED</Nav.Link>
                  </Nav>
                </Card.Text>

              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>




  )
}

export default Section2
