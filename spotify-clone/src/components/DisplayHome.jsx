import React,{useContext} from 'react'
import Navbar from "../components/Navbar"
import AlbumItems from "./AlbumItems.jsx"
import SongItem from "../components/SongItem"
import { PlayerContext } from '../context/PlayerContext.jsx'
const DisplayHome = () => {
  const {songsData,albumsData}=useContext(PlayerContext);
  return (
    <> 
    <Navbar/>
    <div className='mb-4'>
      <h1 className='my-5 font-bold text-2xl'>Featured charts</h1>
      <div className='flex overflow-auto'>
      { albumsData.map((album,index)=>(<AlbumItems key={index} image={album.image} name={album.name} desc={album.desc} id={album._id} />))}
      </div>
    </div>

    <div className='mb-4'>
      <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
      <div className='flex overflow-auto'>
        {songsData.map((song,index)=>(<SongItem key={index} name={song.name} image={song.image}  id={song._id} desc={song.desc}/>))}
      </div>
    </div>
    </>
  )
}

export default DisplayHome