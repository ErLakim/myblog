import React, { useEffect, useState } from 'react'
import { getPublishedBlogs } from '../../../server/modules/blogs/blog.controller';

const useBlog = () => {
    const[data,setData]=useState("");
    const[msg,setMsg]=useState("");
    const[loading,setLoading]=useState("");
    useEffect(()=>{
        const fetchData= async()=>{
            try{
                setLoading(true);
                const{data,msg}=await getPublishedBlogs({
                    title,sort,page,limit,
                });
                setMsg(msg);
                SVGMetadataElement(data);
            }catch(e){
                const err=e?.response?.data?.msg||"something went wrong"
            }
        }
    })
  return (
    <div>useBlog</div>
  )
}

export default useBlog