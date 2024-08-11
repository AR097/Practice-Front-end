import React from "react";
import "./Services.css"
import ruler from "./assets/ruler.png"

function Services() {
    return(
    <content className="app-services" id="Service">
        <h1 className="title">Rates and Services</h1>
        <div className="content-service">
            <p className="text-action">Explore the professional photography services I offer, tailored to meet your unique needs. From personalized photo shoots to high-quality edits, I'm here to capture the moments that matter to you.</p>
            <div className="content-service-box">
                <div className="box-service">
                    <div>
                        <h1>Event Photography</h1>
                        <p>Coverage of corporate events, birthdays, and other social events.
                        Fast delivery and professional editions.</p>
                    </div>
                    <div>
                        <p className="pricing">Starting $xxxx</p>
                    </div>
                </div>

                <div className="box-service">
                    <div>
                        <h1>Editing and Post-Production</h1>
                        <p>Photo editing and retouching services.
                        Color adjustments, blemish removal, and artistic enhancements.</p>
                    </div>
                    <div>
                        <p className="pricing">Starting $xxxx</p>
                    </div>
                </div>

                <div className="box-service">
                    <div>
                        <h1>Lifestyle Photography</h1>
                        <p>Capture authentic, engaging moments that represent your brand.
                        Photo shoots in natural or urban environments to generate real and relatable content.</p>
                    </div>
                    <div>
                        <p className="pricing">Starting $xxxx</p>
                    </div>
                </div>

                <div className="box-service" id="last">
                    <div>
                        <h1>Product Photography for E-commerce and Social Networks</h1>
                        <p>High-quality images that highlight the details and style of your products.
                        Photo shoots adapted for platforms such as Instagram, Facebook and Pinterest.</p>
                    </div>
                    <div>
                        <p className="pricing">Starting $xxxx</p>
                    </div>
                </div>
            </div>
        </div>
    </content>
    );
}
export default Services;