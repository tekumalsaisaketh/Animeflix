import React from "react";
import Anime from "./Anime";
interface Props{
    animeList:any,
    edge:string
}
const AnimeList=(props:Props)=>{
    const {edge,animeList}=props;
    
    return(
        <div className="animeListContainer">
        {
            
            animeList&&animeList?.map((anime:any)=>{
                return <Anime anime={anime} edge={edge}></Anime>
            })
        }
        </div>
        
    )
}
export default AnimeList;