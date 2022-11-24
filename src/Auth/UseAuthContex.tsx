import { createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react"
import { auth } from "./firebase";
export type AuthContentType = {
    signUp:(email: string, password: string) => void;
    logIn: (email: string, password: string) => Promise<UserCredential>
    logOut: () => Promise<void>
  }
export const UserAuthContext=createContext<AuthContentType>(null as any);
interface Props {
    children?: ReactNode
    // any props that come into the component
}
export const UserAuthProvider=({ children, ...props }: Props)=>{
    const [user,setUser]=useState(null as any);
    const signUp=(email:string,password:string)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const logIn=(email:string,password:string)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut=()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubcribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })
        return ()=>{
            unsubcribe();
        }
    },[])


    return <UserAuthContext.Provider value={{signUp,logIn,logOut}}>{children}</UserAuthContext.Provider>

}

    
