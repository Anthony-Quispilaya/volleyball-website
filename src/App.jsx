import { useState } from 'react'
import './App.css'
import TopNavbar from './components/TopNavbar'
import SideNavbar from './components/SideNavbar'
import CreatePost from './components/CreatePost'
import FeedPost from './components/FeedPost'
import WeatherBox from './components/WeatherBox'

function App() {
  return (
    <>
    <div className="App relative h-auto w-auto">
      <TopNavbar />
      <SideNavbar />
      <CreatePost />
      <FeedPost />
      <WeatherBox />
    </div>
    </>
  )
}

export default App
