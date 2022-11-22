import React from "react";
import '../styles/EpisodesLister.scss';
interface Props
{
    episodesList:any,
    animeId:string,
    epNo?:number
}

const EpisodesLister=(props:Props)=>{
    const {episodesList,animeId,epNo}=props;
    let length=0;
    if(episodesList) length=episodesList.length;
    
    return(
        <div className="anime_video_body" >
                <ul id="episode_page">
                    <li>
                        {episodesList&&<a href="#" className="episodes_100"  >1-{episodesList.length}</a>}
                    </li>
                </ul>
                <div className="clr"></div>
                <div id="load_ep">
                    <ul id="episode_related">
                        {
                            episodesList&&episodesList.map((ep:any,index:number)=>{
                                return(
                                    <li className={epNo==length-index?"active":""}>
                                        <a href={`/player/${ep?.episodeId}/${animeId}`}>
                                        <div className="name"><span>EP </span>{ length-index}</div>
                                        </a>
                                    </li>
                                )
                            }) 
                        }
                    </ul>
                </div>
				
       </div>
    )
}
export default EpisodesLister;