import { UserCredential } from "firebase/auth";
import React, { useContext, useState } from "react";
import {  AuthContentType, UserAuthContext } from "../Auth/UseAuthContex";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/SignIn.scss'

const SignInPage=()=>{
    const [email,setEmail]=useState(null as any);
    const [password,setPassword]=useState(null as any);
    const navigate=useNavigate();
    const [error,setError]=useState(null as any);
    const handleSubmit=async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>,type:string)=>{
        e.preventDefault();
        try{
            if(type=="login") 
            {
                const response=await logIn(email,password);
                console.log(response);
                navigate('/home')
                window.location.reload();
                
            } 
            if(type=="register") {
               const response:any= await signUp(email,password);
               if(response?.user?.accessToken!="")
               {
                const inputs:NodeListOf<HTMLInputElement> = document.querySelectorAll('#mail, #password');
                inputs.forEach(input => {
                    input.value = '';
                  });
                toast.success('Registered', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                    
               }
               navigate('/home')
               
            }
        }catch(err){
            var text:any=JSON.parse(JSON.stringify(err));
            toast.error(text.code.slice(5), {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            

        }
    }
    const userAuth=useContext<AuthContentType>(UserAuthContext);
    const {signUp,logIn}=userAuth;




    return (
        <div className="form-container">
            <div className="login-form">
                <form>
                    <h1>Login</h1>
                    <div className="content">
                    <div className="input-field">
                        <input id="mail" type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} autoComplete="nope" required/>
                    </div>
                    <div className="input-field">
                        <input id="password" type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} autoComplete="new-password" required/>
                    </div>
                    </div>
                    <div className="action">
                    <button onClick={(e)=>handleSubmit(e,"register")}>Register</button>
                    <button onClick={(e)=>handleSubmit(e,"login")} >Sign in</button>
                    </div>
                </form>
                <ToastContainer/>
                </div>
                </div>

    )
}
export default SignInPage;