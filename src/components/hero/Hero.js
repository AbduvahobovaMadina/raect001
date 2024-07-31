import React from "react";
import "./hero.css";
import photo from "../../assets/Group 63.png"

function Hero(){
    return (
        <div>
            <section className="hero container">
                <div className="hero__context">
                    <h4>MODERN INTERIOR</h4>
                    <h1>Create Your
                    Interior Design.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation.</p>
                    <button>CONTACT</button>
                </div>
                <div className="hero__img">
                    <img src={photo} alt="" />
                </div>
            </section>
        </div>
    )
}

export default Hero