import React from 'react'
import Nav from 'react-bootstrap/Nav';
import MultiItemCarousel from '../../Components/Carousels/MultiItemCarousel';
import MultiItemSideCarousel from '../../Components/Carousels/MultiItemSideCarousel';
import hero from '../../Images/hero.png';
import logos from '../../Images/logos.jpg';
import thumbnail01 from '../../Images/thumbnail01.png';
import thumbnail02 from '../../Images/thumbnail02.png';
import thumbnail03 from '../../Images/thumbnail03.png';
import Card from 'react-bootstrap/Card';
import man from '../../Images/man.png';
import woman from '../../Images/woman.png';
import unlimited from '../../Images/unlimited.png';
import MultiItemCarouselscene from '../../Components/Carousels/MultiItemCarouselscene';
import IMG1 from '../../Images/IMG1.png';
import IMG2 from '../../Images/IMG2.png';
import IMG3 from '../../Images/IMG3.png';
import "./Home.css"
import "../../App.css"
import "./responsive.css"




const Home = () => {
  return (
    <div className='home'>
      <div className='home-section1'>
            <div className='container text-center'>
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
            <Nav.Link className="getStartedButton theme-primary text-white" href="#getstarted">GET STARTED</Nav.Link>
          </Nav>


        <div className="first-section text-center">
      
          <img src={hero} alt="hero" />


        </div>



        <div className='container home-logos text-center'>
          <img src={logos} alt="logos" />
        </div>
        <div className='second-section'>
          <div className='container text-center getstart '>
            <p className='getstart-heading  '>
              SELECT A PRODUCT TO
              <span className='theme-primary-color'>
                GET STARTED
              </span>
            </p>
          </div>

          <section id="services-slider-sec">
            <div className="container">
              <MultiItemCarousel />
            </div>
          </section>

          <section id="trusted-sec">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-2">
                </div>
                <div className="col-md-4">
                  <div className="trst-txt-div spacing">
                    <p><span className='theme-primary-color'>30</span> Day Satisfaction Guarantee</p>
                    <h3>Get On-Demand Episode Editing For a Flat Monthly Rate</h3>
                    <p className="gap">Instantly hire a team of <span className='theme-primary-color'>professional editors, writers, designers</span> for your podcast. The #1 place for your podcasting needs. Unlimited orders and revisions. Pay monthly and cancel anytime.</p>
                    <p>No Contracts. Just <span className='theme-primary-color'>Fast Service.</span></p>
                  </div>
                </div>
                <div className="carousel2 col-md-6  spacing">
                  <MultiItemSideCarousel />
                </div>
              </div>
            </div></section>
          <section id="about-us text-center">
            <div className="container">
              <div className="row">
                <div className="txt-div">
                  <h4 className='text-center'>1,000+ satisfied parents</h4>
                  <h2 className='text-center'>Hear What Our Families <br /> Say <span className='theme-primary-color'>About Us</span></h2>
                  <p className='text-center'>Our editors will ensure your episodes sound professional. Audio cleaning, multitrack syncing, EQ, voice balancing, noise reduction are just some of the important &amp; necessary techniques for a good listening experience. We want your podcast to sound as good as the best podcasters out there.</p>
                </div>
                <div className='trio-img d-flex text-center'>
                  <div className="col-md-4 ">
                    <img src={thumbnail01} alt="thumbnail01" />
                  </div>
                  <div className="col-md-4 ">
                    <img src={thumbnail02} alt="thumbnail02" />
                  </div>
                  <div className="col-md-4 ">
                    <img src={thumbnail03} alt="thumbnail03" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className='home-section2'>
        <div className="container">
          <div className="row">
            <div className="txt-div2">
              <h4 className='text-center theme-primary-color'>Process</h4>
              <h2 className='text-center'>How Does It Work <span className='theme-primary-color'>?</span></h2>
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
                  <Card.Title className='title'>Your editor works on
your request</Card.Title>
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
                <p><span className='theme-primary-color'>professional</span></p>
                <h3>Hire Your <br /> <span className='theme-primary-color'> Professional </span> <br /> Editor Today  </h3>
                <p className="gap2">Your Personal Editor</p>
                <p>Get assigned your own professional editor who's dedicated to knowing you & your PODCAST.</p>
                <p className="gap2">Your Personal Editor</p>
                <p>Get assigned your own professional editor who's dedicated to knowing you & your PODCAST.</p>
                <Nav className=" main-button">
                  <Nav.Link className="getStartedButton theme-primary text-white" href="#getstarted">GET STARTED</Nav.Link>
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
              <h4 className='text-center'> <span className='theme-primary-color text-center'>Our Pricing</span></h4>
              <h2 className='text-center'>Services To Make Your Podcast
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
                    <Nav className="justify-content-center main-button">
                      <Nav.Link className="getStartedButton theme-primary text-white" href="#getstarted">GET STARTED</Nav.Link>
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
                    <Nav className="justify-content-center main-button">
                      <Nav.Link className="getStartedButton theme-primary text-white" href="#getstarted">GET STARTED</Nav.Link>
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
                    <Nav className="justify-content-center main-button">
                      <Nav.Link className="getStartedButton theme-primary text-white" href="#getstarted">GET STARTED</Nav.Link>
                    </Nav>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className='home-section3'>
        <div className="container-fluid">
          <div className="row">
            <div className='col-md-2'>
            </div>
            <div className="carousel2 col-md-4 woman-img spacing">
              <img width={600} src={woman} alt="" />
            </div>
            <div className="col-md-4 ">
              <div className=" trst-txt-div3 spacing">
                <p>REACH A <span className='theme-primary-color'> LARGER AUDIENCE</span></p>
                <h3>Video Podcast <br />
                  Editing &  <span className='theme-primary-color'> Social Clips  </span> </h3>
                <p>
                  Get YouTube ready episodes, and short clips to promote on all your social media. We'll turn your riverside.fm or zoom recordings into clean video episodes.
                </p>
              </div>
            </div>
            <div className='col-md-1'>
            </div>
          </div>
        </div>

        <div className='sec-card3 container '>

          <div className='row purple-section'>
            <div className='btn col-md-4 content'>
              <h2 className='text-white'>
                Unlimited
              </h2>
              <h6 className='text-white'>
                Requests.
              </h6>
              <Nav className='main-button '>
                <Nav.Link className="getStartedButton theme-white text-purple" href="#getstarted">GET STARTED</Nav.Link>
              </Nav>
            </div>
            <div className='singing-image col-md-6'>
              <img width={600} src={unlimited} alt="" />

            </div>
          </div>

        </div>

        <div className='container-fluid third-carousel'>

          <div className="container">
            <div className="txt-div3">
              <h4 className='text-center'> <span className='theme-primary-color text-center'>Our Pricing</span></h4>
              <h2 className='text-center '>Our Recent <span className='theme-primary-color'>Work</span></h2>
            </div>
          </div>
          <MultiItemCarouselscene />
        </div>


        <div className="container ">
          <div className="txt-div3">
            <h4 className='text-center'> We have helped many business types to achieve their needs:</h4>
            <div className='container text-center headings'>

              <span className='para-heading '>
                Ads
              </span>
              <span className='para-heading '>
                Beauty & Fashion
              </span>
              <span className='para-heading '>
                Business & Marketing
              </span>
              <span className='para-heading '>
                Coaching & Education
              </span>
              <span className='para-heading '>
                Entertainment
              </span>
              <span className='para-heading '>
                Finance
              </span>
              <span className='para-heading '>
                Lifestyle
              </span>
              <span className='para-heading '>
                Health & Wellness
              </span>
            </div>
            <div className='container text-center headings'>

              <span className='para-heading '>
                Real Estate
              </span>
              <span className='para-heading '>
                Tiktok & Reel
              </span>
              <span className='para-heading '>
                Youtube
              </span>



            </div>

          </div>

          <div className="container d-flex justify-content-around align-items-center">
            <div className="blog-content">

              <p><span className='theme-primary-color'>OUR BLOGS</span></p>
              <h3>Browse Our Content <br />
                On Podcast Tips & More</h3>
            </div>

            <Nav className='main-button '>
              <Nav.Link className="getStartedButton theme-primary text-white" href="#getstarted">VIEW ALL</Nav.Link>
            </Nav>

          </div>
          <div className='blog-img d-flex text-center'>
            <div className="col-md-4 blog-img-single">

              <img src={IMG1} alt="IMG1" />
              <p>
                How Long Should A Podcast
                Episode Be?
              </p>

            </div>
            <div className="col-md-4 blog-img-single">

              <img src={IMG2} alt="IMG2" />
              <p>
                How Long Should A Podcast
                Episode Be?
              </p>
            </div>
            <div className="col-md-4 blog-img-single">

              <img src={IMG3} alt="IMG3" />
              <p>
                How Long Should A Podcast
                Episode Be?
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
