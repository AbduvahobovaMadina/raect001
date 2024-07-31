import React from "react";
import "./footer.css";
import photo from "../../assets/Screenshot_3 [Recovered] 1.png"
import { IoLogoFacebook,IoLogoTwitter,IoLogoLinkedin,IoLogoInstagram } from "react-icons/io5";


function Footer(){
    return(
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="footer__wrapper">
                        <div className="footer__item">
                            <img src={photo} alt="" />
                            <p>But i must explain to you all this mistaken
                            idea of dencouncing pleasure.</p>
                        </div>
                        <div className="footer__item">
                            <h3>Quick Links</h3>
                            <p>About Our Company</p>
                            <p>Services WE provide</p>
                            <p>Career & Opportunity</p>
                            <p>Privacy & policy</p>
                            <p>Contact US</p>
                        </div>
                        <div className="footer__item">
                            <h3>Company</h3>
                            <p>About Our Company</p>
                            <p>Services WE provide</p>
                            <p>Career & Opportunity</p>
                            <p>Privacy & policy</p>
                            <p>Contact US</p>
                        </div>
                        <div className="footer__item">
                            <h3>Contact us</h3>
                            <p>About Our Company</p>
                            <p>Services WE provide</p>
                            <p>Career & Opportunity</p>
                            <p>Privacy & policy</p>
                            <p>Contact US</p>
                        </div>
                        <div className="footer__item">
                            <h3>Follow Us</h3>
                            <div className="icon">
                            <IoLogoFacebook />
                            <IoLogoTwitter />
                            <IoLogoLinkedin />
                            <IoLogoInstagram />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}


export default Footer