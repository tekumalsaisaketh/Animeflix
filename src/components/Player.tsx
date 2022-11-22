import React, { useEffect, useState } from "react";
import '../styles/Player.scss'
import EpisodesLister from "./EpisodesLister";
const Player=()=>{
    const url=window.location.href;
    const episodeId=url.split('/').at(-2);
    const epNoString=episodeId?.split('-').at(-1);
    const epNo=Number(epNoString)
    const animeId=url.split('/').at(-1);
    const fetchDetails = async () => {
        const res = await fetch(`http://localhost:5000/anime-details/${animeId}`);
        return res.json();
      };
      const [animeDetails,setAnimeDetails]=useState(null as any);
      useEffect(()=>{
        const getData = async () => 
        {   
            const data = await fetchDetails();
            setAnimeDetails(data)
        };
        getData()
    },[])
    
    let i=0;
    
    const fetchVideoUrl = async () => {
        const res = await fetch(`http://localhost:5000/streamsb/watch/${episodeId}`);
        return res.json();
      };
      const [videoUrl,setUrl]=useState("");
    useEffect(()=>{
        const getData = async () => 
        {   
            const data = await fetchVideoUrl();
            setUrl(data)
        };
        getData()
    },[episodeId])
    
    return (
        <div className="player_page">
            <iframe src={videoUrl} allowFullScreen={true} className="player" frameBorder={0}>
            </iframe>
            <div className="anime_info_episodes">
                    <h2>{animeDetails?.animeTitle}</h2>
                    <EpisodesLister episodesList={animeDetails?.episodesList} animeId={animeId?animeId:""} epNo={epNo}></EpisodesLister>
            </div>
        </div>
    )
    
}
export default Player;