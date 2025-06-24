import './App.css'
import TopNavbar from './components/TopNavbar'
import SideNavbar from './components/SideNavbar'
import CreatePost from './components/CreatePost'
import FeedPost from './components/FeedPost'
import WeatherBox from './components/WeatherBox'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MessagePage from './pages/MessagePage'
import HomePage from './pages/HomePage'
import CommunityPage from './pages/CommunityPage'
import { useLocation} from 'react-router-dom'

function AppContent() {
  const location = useLocation();

  return (
    <div className="App min-h-screen flex flex-col">
      <div className="w-full sticky top-0 z-10">
        <TopNavbar />
      </div>

      <div className="flex flex-1">
        <div className="w-200 sticky top-16 h-full overflow-y-auto">
          <SideNavbar />
        </div>

        {/* This changes based on the route */}
        <div className="flex-1 flex items-center flex-col gap-5 p-5">
          <Routes>
            <Route
              path="/"
              element={<HomePage />} // Default route
            />
            <Route path='/home' element={<HomePage/>} />
            <Route path="/messages" element={<MessagePage />} />
            <Route path="/community" element={<CommunityPage />} />
          </Routes>
        </div>

        {location.pathname === '/community' && (
          <div className="w-200">
            <WeatherBox />
          </div>
        )}
      </div>
    </div>
  );
}


function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;