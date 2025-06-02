import './App.css'
import TopNavbar from './components/TopNavbar'
import SideNavbar from './components/SideNavbar'
import CreatePost from './components/CreatePost'
import FeedPost from './components/FeedPost'
import WeatherBox from './components/WeatherBox'

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <div className="w-full sticky top-0 z-10">
        <TopNavbar />
      </div>
      <div className="flex flex-1">
        <div className="w-200 sticky top-16 h-full overflow-y-auto">
          <SideNavbar />
        </div>
        <div className="flex-1 flex items-center flex-col gap-5 p-5">
          <CreatePost />
          <FeedPost />
        </div>
        <div className="w-200">
          <WeatherBox />
        </div>
      </div>
    </div>
  )
}

export default App

