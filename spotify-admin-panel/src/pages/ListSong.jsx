import React, { useEffect, useState } from 'react';
import { url } from '../App';
import axios from 'axios';
import { toast } from 'react-toastify';


const ListSong = () => {
  const[data,setData]=useState([]);

  const fetchSong=async()=>{
    try {
      const response=await axios.get(`${url}/api/song/list`);
console.log(response.data);

      if(response.data.success){
        setData(response.data.song);
      }
      
    } catch (error) {
      toast.error("Error Occur")
    }
    
    

  }

  const removeSong=async(id)=>{
    try {
      const response=await  axios.post(`${url}/api/song/remove`,{id})
    if(response.data.success){
      toast.success(response.data.message);
      await fetchSong();
    }

      
    } catch (error) {
      toast.error("Error Occur")
      
    }
    
  }
  useEffect(()=>{
    fetchSong();
  })
  return (
    <div className=''>
      <p>All Songs List</p>
      <br />
      <div>
        <div className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100 '>
          <b>Images</b>
          <b>Name</b>
          <b>Album</b>
          <b>Duration</b>
          <b>Action</b>
       </div>
       {data.map((item,index)=>{
        return(
          <div key={index} className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-2 border border-gary-300 text-sm mr-5'>
              <img className="w-12" src={item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.album}</p>
              <p>{item.duration}</p>
              <p className='cursor-pointer' onClick={()=>removeSong(item._id)}>x</p>
          </div>

        )
       })}
      </div>
    </div>
  )
}

export default ListSong