import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import '../styles/Navbar.scss'
interface Props{
    clickListner:(event: React.MouseEvent<HTMLLIElement, MouseEvent>,edge: string) => void
}
const NavBar=(props:Props)=>{
    const {clickListner}=props;
    return (
        <div id="navtab">
            <ul className="nav nav-tabs">
                <li id="recentbtn" className="active"  onClick={(event)=>clickListner(event,"recent-release")} >
                    <a>All</a>
                </li>
                <li id="popularbtn"  onClick={(event)=>clickListner(event,"popular")} >
                    <a>Popular</a>
                </li>
                <li id="moviebtn"  onClick={(event)=>clickListner(event,"new-season")} >
                    <a>New Releases</a>
                </li>
                <li id="moviebtn"  onClick={(event)=>clickListner(event,"anime-movies")} >
                    <a>Movie</a>
                </li>
            </ul>
        </div>
    )
}
export default NavBar;
