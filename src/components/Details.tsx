import React, { useEffect, useState } from "react";
import '../styles/Details.scss'
import EpisodesLister from "./EpisodesLister";
const DetailsPage=()=>{
    const url=window.location.href;
    const animeId=url.split('/').at(-1)
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
    console.log(animeDetails);
    console.log(animeDetails);
    
    
    return (
    <div>
        <div className="main_body">
            <div className="anime_name anime_info">
                <i className="icongec-anime_info i_pos"></i>
                <h2>ANIME INFO</h2>            
            </div>
            <div className="anime_info_body">
                <div className="anime_info_body_bg">
                    <img src={animeDetails?.animeImg}/>
                    <div className="anime_info_texts">
                        <h1>{animeDetails?.animeTitle}</h1>
                        <p className="type">
                            <span>Type: </span>
                            <a title="Fall 2022 Anime">{animeDetails?.type}</a>
                        </p>
                        <p className="type plot_summary"><span>Plot Summary: </span>{animeDetails?.synopsis}</p>
                        <p className="type">
                            <span>Genre: </span>
                            {
                                animeDetails?.genres&&animeDetails.genres.map((genre:string,index:number)=>{
                                    if(index==animeDetails.genres.length-1) return <a href={`/genre/${genre}/`} title={genre}>{genre} </a>
                                    return <a href={`/genre/${genre}/`} title={genre}>{genre}, </a>
                                })
                            }		
                        </p>
                        <p className="type"><span>Released: </span>{animeDetails?.releasedDate}</p>
                        <p className="type">
                            <span>Status: </span>
                            <a href="/ongoing-anime.html" title="Ongoing Anime">{animeDetails?.status}</a>
                        </p>
                        <p className="type">
                            <span>Other name: </span>
                            {animeDetails?.otherNames}
                        </p>
                    </div>
                </div>
                <div className="clr"></div>
                <div className="anime_info_episodes">
                    <h2>{animeDetails?.animeTitle}</h2>
                    <EpisodesLister episodesList={animeDetails?.episodesList} animeId={animeId?animeId:""} ></EpisodesLister>
                </div>
            </div>
        </div>
    </div>
    )
}
export default DetailsPage;