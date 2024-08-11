import React from "react";
import Slider from "react-slick";
import "./Client.css";
import client from "./assets/client.png";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Client() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, 
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
        <div className="app-clients" id="Client">
            <h1 className="title">Clients</h1>
            <div className="content-clients-line">
                <Slider {...settings} className="content-clients">
                    <div className="box-client">
                        <img src={client} alt="client" />
                        <div className="text-client">
                            <h1>Name client</h1>
                            <p>condimentum orci. Praesent varius porttitor eros in condimentum. Vestibulum ante ipsum primis in faucibus orci.</p>
                        </div>
                    </div>
                    <div className="box-client">
                        <img src={client} alt="client" />
                        <div className="text-client">
                            <h1>Name client</h1>
                            <p>condimentum orci. Praesent varius porttitor eros in condimentum. Vestibulum ante ipsum primis in faucibus orci.</p>
                        </div>
                    </div>
                    <div className="box-client">
                        <img src={client} alt="client" />
                        <div className="text-client">
                            <h1>Name client</h1>
                            <p>condimentum orci. Praesent varius porttitor eros in condimentum. Vestibulum ante ipsum primis in faucibus orci.</p>
                        </div>
                    </div>
                    <div className="box-client">
                        <img src={client} alt="client" />
                        <div className="text-client">
                            <h1>Name client</h1>
                            <p>condimentum orci. Praesent varius porttitor eros in condimentum. Vestibulum ante ipsum primis in faucibus orci.</p>
                        </div>
                    </div>
                    <div className="box-client">
                        <img src={client} alt="client" />
                        <div className="text-client">
                            <h1>Name client</h1>
                            <p>condimentum orci. Praesent varius porttitor eros in condimentum. Vestibulum ante ipsum primis in faucibus orci.</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Client;
