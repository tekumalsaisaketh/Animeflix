import React from "react"
interface Props{
    anime:any,
    index:number
}
const TopAnime=(props:Props)=>{
    const {anime,index}=props;
    return (
        <a href={`/details/${anime?.animeId}`}>
            <li className="topanimeli topanimea">
                <img src={anime?.animeImg} className="topanimeimg"/>
                    <div className="topAnimeDetails">
                        <div className="topanimenumber">#{index+1}</div>
                        <span className="topanimename">{anime?.animeTitle}</span>
                    </div>
            </li>
        </a>
    )
}
export default TopAnime