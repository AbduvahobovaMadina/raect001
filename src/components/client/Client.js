import React from "react";
import "./client.css";


function Client(){
    return(
        <div>
            <div className="container">
                <div className="client">
                    <h4>TESTIMONIALS</h4>
                    <h2>Client says about us</h2>
                </div>
                <div className="wrapper">
                    <div className="card">
                   <div className="title"> <h3>Louis Saville </h3>/CEO at Google inc</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
elit, sed do eiusmod tempor incididunt ut labore
et dolore magna aliqua.</p>
                    </div>
                    <div className="card">
                   <div className="title"> <h3>Louis Saville </h3>/CEO at Google inc</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
elit, sed do eiusmod tempor incididunt ut labore
et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Client