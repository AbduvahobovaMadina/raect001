import React from "react";
import "./letest.css";
import photo1 from "../../assets/Mask Group (1).png"
import photo2 from "../../assets/Mask Group.png"

function Letest(){
    return(
        <div>
                <div className="letest">
            <div className="container">
                    <h4>LETEST NEWS</h4>
                    <h2>From Our Blog</h2>
                    <div className="wrapper">
                        <div className="wrapper_card">
                            <img src={photo1} alt="" />
                            <h2>2020 Interior Design Trends</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            incididunt ut labore et dolore magna aliqua.</p>
                            <button>CONTINUE READING....</button>
                        </div>
                        <div className="wrapper_card">
                            <img src={photo2} alt="" />
                            <h2>28 Notable Product at ARC Interior Design</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            incididunt ut labore et dolore magna aliqua.</p>
                            <button>CONTINUE READING....</button>
                        </div>
                    </div>
            </div>
                </div>
        </div>
    )
}


export default Letest