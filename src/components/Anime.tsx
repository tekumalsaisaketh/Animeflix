import React from "react";
import { Link } from "react-router-dom";
import '../styles/Anime.scss'
interface Props{
    anime:any;
    edge:string
}
const Anime=(props:Props)=>{

    
    const {anime,edge}=props;
    let routeTo="";
    if(edge=="popular"||edge=="anime-movies"||edge=="new-season") routeTo="/details/"+anime?.animeId;
    else if(edge=="top-airing") {
        const episode=anime?.latestEp?.split(" ")[1];
        const epidoseId=anime?.animeId+"-episode-"+episode;
        routeTo=/player/+epidoseId+"/"+anime?.animeId;
    }
    else routeTo="/player/"+anime?.episodeId+"/"+anime?.animeId;
    
    return(
        <Link to={routeTo}>
            <div className="anime_container" onClick={()=>console.log(anime)}>
                <li>
                    <a  title={anime?.animeTitle}>
                    <div className="searchimg">
                        <img className="resultimg" alt="" src={anime?.animeImg}/>
                    </div>
                    <div className="details">
                        <p className="name">{anime?.animeTitle}</p>
                        <p className="infotext">
                        {anime?.episodeNum&&`Episode ${anime?.episodeNum}`}
                        {anime?.releasedDate&&anime?.releasedDate}
                        {anime?.latestEp&&anime?.latestEp}
                        </p>
                    </div>
                    </a>
                </li>
            </div>
        </Link>
    )
}
export default Anime;