import React from 'react'
import Carousel from "react-elastic-carousel";
import "./MultiItemCarousel.css"
import { BsFillArrowRightCircleFill } from 'react-icons/bs';


const MultiItemCarousel = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 }
  ];
  return (
    <div className="carousel-wrapper">
      <Carousel breakPoints={breakPoints}  >
        <div className='mx-2' >
          <div className="ser-inerdiv">
            <h2>Producer Services</h2>
            <p>Co-writing scripts, editing content, adding music beds, and collaborating on content.</p>
            <span>

              <a href="#!" role="button"> <BsFillArrowRightCircleFill size="1.2rem" class='theme-primary-color' /></a>



            </span>
          </div>
        </div>
        <div className='mx-2' >
          <div className="ser-inerdiv">
            <h2>Podcast<br /> Launch</h2>
            <p>Bumper music, cover art, trailers, distribution setup, voiceover, and website design.</p>
            <span>

              <a href="#!" role="button"> <BsFillArrowRightCircleFill size="1.2rem" class='theme-primary-color' /></a>



            </span>
          </div>
        </div>
        <div className='mx-2' >
          <div className="ser-inerdiv">
            <h2>Audio Production</h2>
            <p>Editing, sound design, mixing and mastering by professional in-house audio engineers.</p>
            <span>
              <a href="#!" role="button"> <BsFillArrowRightCircleFill size="1.2rem" class='theme-primary-color' /></a>

            </span>
          </div>
        </div>
        <div className='mx-2' >
          <div className="ser-inerdiv">
            <h2>Video Production</h2>
            <p>Video editing, color grading, basic animation, and custom YouTube channel setup.</p>
            <span>

              <a href="#!" role="button"> <BsFillArrowRightCircleFill size="1.2rem" class='theme-primary-color' /></a>


            </span>
          </div>
        </div>

        <div className='mx-2' >
          <div className="ser-inerdiv">
            <h2>Video Production</h2>
            <p>Video editing, color grading, basic animation, and custom YouTube channel setup.</p>
            <span>

              <a href="#!" role="button"> <BsFillArrowRightCircleFill size="1.2rem" class='theme-primary-color' /></a>


            </span>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default MultiItemCarousel
