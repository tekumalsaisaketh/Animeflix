import React, { useEffect, useState } from "react";
import HomeIcon from "../icons/home";
import LogoIcon from "../icons/logo";
import '../styles/Header.scss';
import SearchList from "./Searchlist";
const Header=()=>{
    const [message,setMessage]=useState("");
    const [inputFocus,setinputFocus]=useState(true);
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setMessage((event.target as HTMLInputElement).value);
        console.log(message);
        
      };
      const inputBox=document.getElementById("message");
      useEffect(()=>{
        if(inputBox)
        {
            inputBox.addEventListener("blur",()=>{
                setTimeout(()=>setinputFocus(false),100)
            })
            inputBox.addEventListener("focus",()=>{
                setinputFocus(true)
            })
        }
      },[inputBox])
      const [searchData,setSearchData]=useState();
      const fetchDetails = async () => {
        const res = await fetch(`http://localhost:5000/search?keyw=${message}`);
        return res.json();
      };
      useEffect(()=>{
        const getData = async () => 
        {   
            const data = await fetchDetails();
            setSearchData(data)
            console.log(data);
            
        };
        getData()
        
      },[message])
    return (
        <div className="header" >
            <div className="left_header">
            <div className="homebutton">
                <button>   
                    <a href="/">
                        <HomeIcon color="white" size={26}></HomeIcon>
                    </a>
                </button>
            </div>
            <a href="/">
                <div className="logobutton">
                    ANIMEFLIX
                </div>  
            </a>
            </div>
            <div className="searchBox">
                <input placeholder="Search" type="text"
                    id="message"
                    name="message"
                    onChange={(event)=>handleChange(event)}
                    value={message}></input>
                {searchData&&searchData!=""&&<SearchList inputFocus={inputFocus} animeList={searchData}></SearchList>}
            </div>
        </div>
    )
}
export default Header;