import React from "react";
import "./Portfolio.css";
import Card from "./assets/portfolio.png"


function Portfolio() {
    return(
        <content className="app-portfolio" id="Portfolio">
            <h1 className="title">Portfolio</h1>
            <div className="content-portfolio">
                <div id="items">
                    <div class="imagecard" >
                        <a href=""  className="imagecard"> 
                            <img src={Card} alt="card" />
                            <h2 id="Titlecard">Event</h2>
                        </a>
                    </div>
                </div>
                <div id="items">
                    <div class="imagecard">
                        <a href="" className="imagecard"> 
                            <img src={Card} alt="card" />
                            <h2 id="Titlecard">Lifestyle</h2>
                        </a>
                    </div>
                </div>
                <div id="items">
                    <div class="imagecard">
                        <a href=""  className="imagecard"> 
                            <img src={Card} alt="card" />
                            <h2 id="Titlecard">Product</h2>
                        </a>
                    </div>
                </div>
            </div>
        </content>
    );
}

export default Portfolio;