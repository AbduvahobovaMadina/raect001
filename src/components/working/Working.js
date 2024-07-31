import React from "react";
import "./working.css";
import photo from "../../assets/Group 78.png";




function Working(){
    return (
        <div>
            <div className="container">
                <div className="working">
                <div className="working__text">
                            <h1>20</h1>
                            <h2>Years Of Successful
            Working
            The Market</h2>
            <button>Read more</button>
                </div>
                <div className="working__img">
                    <img src={photo} alt="" />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Working