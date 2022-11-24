import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import '../styles/Navbar.scss'
import PageSelector from "./pages";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Auth/firebase";
interface Props{
    clickListner:(event: React.MouseEvent<HTMLLIElement, MouseEvent>,edge: string) => void,
    pageNum:number,
    setPageNum:React.Dispatch<React.SetStateAction<number>>
}
const NavBar=(props:Props)=>{
    const {clickListner,pageNum,setPageNum}=props;
    const [user] = useAuthState(auth);
    return (
        <div className="navbar">
        <div id="navtab">
            <ul className="nav nav-tabs">
                <li id="recentbtn" className="active"  onClick={(event)=>clickListner(event,"recent-release")} >
                    <a>All</a>
                </li>
                <li id="popularbtn"  onClick={(event)=>clickListner(event,"popular")} >
                    <a>Popular</a>
                </li>
                <li id="movie"  onClick={(event)=>clickListner(event,"new-season")} >
                    <a>New Releases</a>
                </li>
                <li id="moviebtn"  onClick={(event)=>clickListner(event,"anime-movies")} >
                    <a>Movie</a>
                </li>
                {
                    user&&<li id="moviebtn"  onClick={(event)=>clickListner(event,"anime-movies")} >
                    <a>Favorites</a>
                </li>
                }
            </ul>
        </div>
        <PageSelector pageNum={pageNum} setPageNum={setPageNum} ></PageSelector>
        </div>
    )
}
export default NavBar;
