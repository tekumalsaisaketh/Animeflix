import React, { useEffect, useState } from "react";
import '../styles/Leftside.scss'
import NavBar from "./Navbar";
import AnimeList from "./AnimeList";
const LeftSide=()=>{
    const [edge,setEdge]=useState("recent-release")
    const fetchDetails = async () => {
        const res = await fetch(`http://localhost:5000/${edge}`);
        return res.json();
      };

    const [animeList,setAnimeList]=useState(null as any);
    useEffect(()=>{
        const getData = async () => 
        {   
            const data = await fetchDetails();
            setAnimeList(data)
        };
        getData()
    },[edge])
    const clickListner=(event:React.MouseEvent<HTMLLIElement,MouseEvent>,edge:string)=>{
        setEdge(edge)
        const prevActive=document.getElementsByClassName("active")[0];
        if(prevActive) prevActive.classList.remove("active")
        event.currentTarget.className+="active";
    }
    return (
        <div>
            <NavBar clickListner={clickListner}></NavBar>
            <AnimeList animeList={animeList} edge={edge}></AnimeList>
        </div>
        
    )
}
export default LeftSide;