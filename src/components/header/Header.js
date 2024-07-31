import React from "react";
import "./header.css";
import { IoSearchOutline } from "react-icons/io5";
import photo from "../../assets/Screenshot_3 [Recovered] 1.png"


function Header(){
    return (
        <div>
            <header className="header">
                <div className="container">
                    <nav className="navbar from-top">
                    <img src={photo} alt="" />
                    <ul className="navbar__collection">
                        <li className="from-top"><a href="#">Home</a></li>
                        <li className="from-top"><a href="#">Project</a></li>
                        <li className="from-top"><a href="#">Service</a></li>
                        <li className="from-top"><a href="#">About</a></li>
                        <li className="from-top"><a href="#">Blog</a></li>
                        <li className="from-top"><a href="#">Shop</a></li>
                        <li className="from-top"><a href="#">Contact</a></li>
                        <button>Sign up</button>
                    </ul>

                    </nav>
                </div>
            </header>
        </div>
    )
}


export default Header