import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
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

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/illegal-fishing-tracker" element={<IllegalFishingTracker />} />
            <Route path="/community" element={<Community />} />
            <Route path="/events" element={<Events />} />
            <Route path="/weather" element={<WeatherMonitor />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
