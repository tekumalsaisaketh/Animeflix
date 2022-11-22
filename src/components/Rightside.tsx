import React, { useEffect, useState } from "react"
import TopAnime from "./TopAnime";
import '../styles/Rightside.scss'
const RightSide=()=>{
    const fetchDetails = async () => {

        const res = await fetch(`http://localhost:5000/top-airing`);
        return res.json();
      };
      const [topAnimeList,setTopAnimeList]=useState(null as any);
      useEffect(()=>{
        const getData = async () => 
        {   
            const data = await fetchDetails();
            data?.reverse();
            setTopAnimeList(data)

        };
        getData()
    },[])
    console.log(topAnimeList);
    
    return (
        <div >
            {topAnimeList&&<div className="rightsideHeading">Daily Top</div>}
            {
                topAnimeList&&topAnimeList.map((anime:any,index:number)=>{
                    return <TopAnime anime={anime} index={index}></TopAnime>
                })
            }
        </div>
    )
}
export default RightSide