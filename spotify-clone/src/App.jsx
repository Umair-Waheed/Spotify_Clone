import React,{ useContext } from 'react'
import Player from './components/Player'
import Sidebar from './components/Sidebar'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext.jsx'
function App() {
  const{audioRef,track,songsData}=useContext(PlayerContext);
  return (
    <div className='h-screen bg-black text-white '>
     {
      songsData.length !==0 
      ?<>
      <div className='h-[90%] flex'>
        <Sidebar/>
        <Display/>
      </div>
      <Player/>
      </>
      :null
     }
      
      <audio ref={audioRef} src={track? track.file : ""} preload='auto'></audio>
    </div>
  )
}

export default App
