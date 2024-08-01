import React from 'react'
import "../styles/home.css"
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

const Home = () => {
  return (
    <div className='home'>
        <div className="HomeContainer">
            <Sidebar/>
            <Chat/>
        </div>
    </div>
  )
}

export default Home