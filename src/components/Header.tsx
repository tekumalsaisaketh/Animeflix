import React, { useContext, useEffect, useState } from "react";
import { auth } from "../Auth/firebase";
import { AuthContentType, UserAuthContext } from "../Auth/UseAuthContex";
import HomeIcon from "../icons/home";
import LogoIcon from "../icons/logo";
import { useNavigate } from "react-router-dom";
import '../styles/Header.scss';
import SearchList from "./Searchlist";
import { useAuthState } from "react-firebase-hooks/auth";
const Header=()=>{
    const [message,setMessage]=useState("");
    const [inputFocus,setinputFocus]=useState(true);
    const [user] = useAuthState(auth);
    const navigate=useNavigate();
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
      const userAuth=useContext<AuthContentType>(UserAuthContext);
        const {logOut}=userAuth;
      const handleLogout=()=>{
            logOut();
      }
      const handleLogIn=()=>{
        navigate('/login');
        window.location.reload();
      }
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
                    <a href="/home">
                        <HomeIcon color="white" size={26}></HomeIcon>
                    </a>
                </button>
            </div>
            <a href="/home">
                <div className="logobutton">
                    ANIMEFLIX
                </div>  
            </a>

            </div>
            <div className="searnlog">
                <div className="searchBox">
                    <input placeholder="Search" type="text"
                        id="message"
                        name="message"
                        onChange={(event)=>handleChange(event)}
                        value={message}></input>
                    {searchData&&searchData!=""&&<SearchList inputFocus={inputFocus} animeList={searchData}></SearchList>}
                </div>
                {user&&<button  className="logbtn" onClick={handleLogout}>Logout</button>}
            {!user&&<button  className="logbtn" onClick={handleLogIn}>Login/Register</button>}
            </div>
        </div>
    )
}
export default Header;