import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

import image from "./assets/exemple.png";

function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    return (
        <div className="" id="Home">

        <div className="app-home">
            <Slider {...settings} className="content-home-image">
                <div className="box-image-slide">
                    <img src={image} alt="" />
                </div>

                <div className="box-image-slide">
                    <img src={image} alt="" />
                </div>

            </Slider>

            <div className="corners-border">
                <div className="name-home">
                    <h2>Lorem Ipsum</h2>
                </div>
            </div>
        </div>

        </div>
    );
}

export default Home;
