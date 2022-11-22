import React from "react";
import HomeIcon from "../icons/home";
import LogoIcon from "../icons/logo";
import '../styles/Header.scss';
const Header=()=>{
    return (
        <div className="header" >
            <div className="homebutton">
                <button>   
                    <a href="/">
                        <HomeIcon color="white" size={26}></HomeIcon>
                    </a>
                </button>
            </div>
            <a href="/">
            <div className="logobutton">
                ANIMEFLIX
            </div>  
            </a>
            <div className="searchBox">
                <input placeholder="Search"></input>
            </div>
        </div>
    )
}
export default Header;