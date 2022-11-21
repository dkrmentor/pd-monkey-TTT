import React from 'react'
import Carousel from "react-elastic-carousel";
import scene from '../../Images/scene1.png';
import "./Carousels.css"


const MultiItemCarouselscene = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 1 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 4 }
    ];
    return (
        <div className="carousel-wrapper third">
            <Carousel breakPoints={breakPoints}  >

                <div className="ser-inerdiv3  ">
                    <img src={scene} alt="scene" />
                </div>


                <div className="ser-inerdiv3  ">
                    <img src={scene} alt="scene" />
                </div>


                <div className="ser-inerdiv3  ">
                    <img src={scene} alt="scene" />
                </div>



                <div className="ser-inerdiv3  ">
                    <img src={scene} alt="scene" />

                </div>

                <div className="ser-inerdiv3  ">
                    <img src={scene} alt="scene" />

                </div>

            </Carousel>
        </div>
    )
}

export default MultiItemCarouselscene
