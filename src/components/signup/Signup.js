import React from "react";
import "./signup.css";


function Signup(){
    return(
        <div>
            <div className="container">
                <div className="signup">
                <h2>DON’T FORGET TO SIGN UP</h2>
                <hr/>
                <p>Find out early about all upcoming promotions and new product releases with
                our newsletter.</p>
                <div className="signup__btn">
                    <input type="text"  placeholder="Enter your email address....."/>
                    <button>SUBSCRIBE</button>
                </div>
                </div>

            </div>
        </div>
    )
}


export default Signup