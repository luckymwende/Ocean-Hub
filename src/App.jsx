import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/layout/Footer';
import ChatBox from './components/ChatBox';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import IllegalFishingTracker from './pages/IllegalFishingTracker';
import Community from './pages/Community';
import Events from './pages/Events';
import WeatherMonitor from './pages/WeatherMonitor';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useAuth } from './hooks/useAuth';
import UserProfile from './pages/UserProfile';
import Founders from './pages/Founders';
import Tourism from './pages/Tourism';

function App() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ocean-blue-500"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Protected routes */}
            <Route path="/" element={
              isAuthenticated ? <Home /> : <Navigate to="/login" replace />
            } />
            <Route path="/marketplace" element={
              isAuthenticated ? <Marketplace /> : <Navigate to="/login" replace />
            } />
            <Route path="/illegal-fishing-tracker" element={
              isAuthenticated ? <IllegalFishingTracker /> : <Navigate to="/login" replace />
            } />
            <Route path="/community" element={
              isAuthenticated ? <Community /> : <Navigate to="/login" replace />
            } />
            <Route path="/events" element={
              isAuthenticated ? <Events /> : <Navigate to="/login" replace />
            } />
            <Route path="/weather" element={
              isAuthenticated ? <WeatherMonitor /> : <Navigate to="/login" replace />
            } />
            <Route path="/about" element={
              isAuthenticated ? <About /> : <Navigate to="/login" replace />
            } />
            <Route path="/privacy" element={
              isAuthenticated ? <Privacy /> : <Navigate to="/login" replace />
            } />
            <Route path="/terms" element={
              isAuthenticated ? <Terms /> : <Navigate to="/login" replace />
            } />
            <Route path="/contact" element={
              isAuthenticated ? <Contact /> : <Navigate to="/login" replace />
            } />
            <Route path="/profile" element={
              isAuthenticated ? <UserProfile /> : <Navigate to="/login" replace />
            } />
            <Route path="/founders" element={
              isAuthenticated ? <Founders /> : <Navigate to="/login" replace />
            } />
            <Route path="/tourism" element={
              isAuthenticated ? <Tourism /> : <Navigate to="/login" replace />
            } />
          </Routes>
        </main>
        <Footer />
        <ChatBox />
      </div>
    </Router>
  );
}

export default App;