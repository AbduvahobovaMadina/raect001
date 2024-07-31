import React from "react";
import "./service.css";
import sd from "../../assets/sd.svg";
import sr from "../../assets/sr.svg";



function Service(){
    return (
        <div>
            <div className="container">
                <h4>WHAT WE DO</h4>
                <h2>Our Service</h2>
                <div className="wrapper">
                    <div className="card">
                        <img src={sd} alt="" />
                        <div className="text">
                            <h3>Interior Design</h3>
                            <p>Lorem ipsum dolor amet consectetur
adipiscing elit sed eiusmod tempor
incididunt ut labore.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={sr} alt="" />
                        <div className="text">
                            <h3>Architecture</h3>
                            <p>Lorem ipsum dolor amet consectetur
adipiscing elit sed eiusmod tempor
incididunt ut labore.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={sd} alt="" />
                        <div className="text">
                            <h3>Planning</h3>
                            <p>Lorem ipsum dolor amet consectetur
adipiscing elit sed eiusmod tempor
incididunt ut labore.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service