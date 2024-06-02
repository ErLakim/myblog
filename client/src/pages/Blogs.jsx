import { Link } from "react-router-dom";

import { useDebounce } from "../hooks/useDebounce";


import LogoImg from "../assets/logo.png";
import { useState,useEffect } from "react";

const Blogs=()=>{
    const[query,setQuery]=useState("");
    const{blogs,loading,error,msg,setTitle}=useBlogContext;

    const{delayTerm}=useDebounce({title:query,delay:8000})

const handleErrorImg=(e)=>{
    e.target.src=LogoImg;
};

useEffect(()=>{
    setTitle(delayTerm);
},[setTitle,delayTerm]);

return(
    <>
    
    </>
)

}
