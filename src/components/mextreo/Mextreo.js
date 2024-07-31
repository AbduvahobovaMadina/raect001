import React from "react";
import "./mextreo.css";
import photo from "../../assets/Group 73.png"





function Mextreo(){
    return (
        <div>
            <div className="container ">
               <div className="mextreo">
                    <div className="mextreo__img">
                        <img src={photo} alt="" />
                    </div>
                    <div className="mextreo__text">
                        <h4>ABOUT US</h4>
                        <h2>Interioris The Will
                        of An Epoch Mextreo</h2>
                        <p>There are many variations of passages of Lorem Ipsum available,
but the majority have suffered alteration in some form injected
humour, or randomised words which don't look even slightly
believable.If you are going to use a passage of Lorem Ipsum,
sure there isn't anything embarrassing hidden the middleof text.
All the Lorem Ipsum generators on the Internettend to repeat
predefined chunks as necessary,making this the first true
generator on the Internet.</p>
                            <button>Learn more</button>
                    </div>
               </div>
            </div>

        </div>
    )
}

export default Mextreo