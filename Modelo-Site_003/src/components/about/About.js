import React from "react";
import "./About.css"
import { getDefaultNormalizer } from "@testing-library/react";
import about from './assets/about.png';

function About() {
    return(
    <content className="app-about" id="About">
        <h1 className="title">I'm Lorem Ipsun</h1>
        <div className="content-about">
            <div className="content2-about">
                <div className="Focus-text">
                    <h1 className="text-upper">PHOTOGRAPHER</h1>
                    <h1 className="text-and">&</h1>
                    <h1 className="text-lower">EDITOR</h1>
                </div>
                <div className="box-about-photo-into">
                    <div className="image-about">
                        <img src={about} alt="Logo" />
                    </div>
                    <div className="text-about">
                    <h1>Who I am?</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacus nibh, condimentum a risus ac, laoreet consectetur sapien. Fusce in condimentum orci. Praesent varius porttitor eros in condimentum. Vestibulum ante ipsum primis in faucibus orci.
                        </p>
                        <h1>What I do?</h1>
                        <ul>
                            <li>faucibus</li>
                            <li>faucibus</li>
                            <li>faucibus</li>
                            <li>faucibus</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </content>
    );
}
export default About;