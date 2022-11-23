import React, { useEffect } from "react";
interface Props{
    animeList:any,
    inputFocus:boolean
}
const SearchList=(props:Props)=>{
    const {animeList,inputFocus}=props;
    const showList=animeList?.slice(0,6);
    return(
        <>
            {inputFocus&&<div className="searchlist">
                {  showList&&showList.map((anime:any) =>{
                        return (<a href={`/details/${anime?.animeId}`}>
                            <li className="seachanimeli searchanimea">
                                <img src={anime?.animeImg} className="searchanimeimg"/>
                                    <div className="searchAnimeDetails">
                                        <span className="searchanimename">{anime?.animeTitle}</span>
                                    </div>
                            </li>
                        </a>)
                    })
                }
            </div>}
        </>
    )
}
export default SearchList;