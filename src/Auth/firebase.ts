import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/auth"
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyCBWVkTCbTissQvggLDPLXaeP8NvxHF0Nw",
    authDomain: "animeflex-445ec.firebaseapp.com",
    projectId: "animeflex-445ec",
    storageBucket: "animeflex-445ec.appspot.com",
    messagingSenderId: "1026006113790",
    appId: "1:1026006113790:web:362ba0314e62b7c9f174af",
    measurementId: "G-S9GC7CP2N2"
  };
const app = initializeApp(firebaseConfig);

export default app;
export const auth=getAuth(app);
