import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! I’m here to help you learn about Ocean Hub. Ask me anything about our features, like Coastal Tourism, Marketplace, or how to navigate the site!' },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Scroll to the bottom of the chat when new messages are added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle user message submission
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message to chat
    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');

    // Simulate bot response (replace with API call in production)
    setTimeout(() => {
      const botResponse = getBotResponse(input.toLowerCase());
      setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
    }, 500);
  };

  // Bot response logic (educative and informative)
  const getBotResponse = (message) => {
    if (message.includes('tourism') || message.includes('coastal tourism')) {
      return (
        <>
          The Coastal Tourism page is your gateway to exploring Kenya’s stunning coastal destinations, such as Mombasa, Lamu, and Diani. You can book hotels, arrange guided tours, and plan sustainable activities like snorkeling, boat tours, or cultural experiences—all while supporting eco-friendly tourism. <br />
          <Link to="/tourism" className="text-ocean-blue-500 hover:underline">Visit Coastal Tourism</Link>
        </>
      );
    } else if (message.includes('marketplace') || message.includes('sustainable marketplace')) {
      return (
        <>
          The Sustainable Marketplace connects you with verified sellers offering ocean-related products, such as sustainably sourced seafood, handmade crafts, and eco-friendly gear. It supports local Kenyan coastal communities and promotes a blue economy. <br />
          <Link to="/marketplace" className="text-ocean-blue-500 hover:underline">Visit Marketplace</Link>
        </>
      );
    } else if (message.includes('illegal fishing') || message.includes('fishing tracker')) {
      return (
        <>
          The Illegal Fishing Tracker empowers you to report and monitor suspicious fishing activities in Kenya’s territorial waters. By reporting, you help protect marine ecosystems and support enforcement efforts to stop illegal practices. <br />
          <Link to="/illegal-fishing-tracker" className="text-ocean-blue-500 hover:underline">Visit Illegal Fishing Tracker</Link>
        </>
      );
    } else if (message.includes('community') || message.includes('forum')) {
      return (
        <>
          The Community Forum is a space to connect with ocean enthusiasts along Kenya’s coast. Share knowledge, discuss marine conservation strategies, and collaborate on projects to protect our oceans. <br />
          <Link to="/community" className="text-ocean-blue-500 hover:underline">Visit Community Forum</Link>
        </>
      );
    } else if (message.includes('events') || message.includes('calendar')) {
      return (
        <>
          The Events Calendar lists upcoming activities like beach cleanups, marine conservation workshops, and community events across Kenya’s coastal regions. Participating helps you make a direct impact on ocean health. <br />
          <Link to="/events" className="text-ocean-blue-500 hover:underline">Visit Events Calendar</Link>
        </>
      );
    } else if (message.includes('weather') || message.includes('monitor')) {
      return (
        <>
          The Weather Monitor provides real-time updates on marine weather and fishing conditions along Kenya’s coast. Use it to plan safe fishing trips or beach outings with accurate tide, wind, and temperature data. <br />
          <Link to="/weather" className="text-ocean-blue-500 hover:underline">Visit Weather Monitor</Link>
        </>
      );
    } else if (message.includes('about') || message.includes('who are you')) {
      return (
        <>
          Ocean Hub is a platform dedicated to sustainable ocean practices and marine conservation along Kenya’s coast. We aim to build a blue economy that benefits all Kenyans through tools like the Marketplace, Tourism hub, and more. Learn about our mission and team! <br />
          <Link to="/about" className="text-ocean-blue-500 hover:underline">Visit About Page</Link>
        </>
      );
    } else if (message.includes('login') || message.includes('sign up')) {
      return (
        <>
          To access most features like the Marketplace or Tourism pages, you need to log in or sign up. It’s quick and easy, and it helps us keep your experience secure. <br />
          <Link to="/login" className="text-ocean-blue-500 hover:underline">Log In</Link> or{' '}
          <Link to="/signup" className="text-ocean-blue-500 hover:underline">Sign Up</Link>
        </>
      );
    } else if (message.includes('founders') || message.includes('team')) {
      return (
        <>
          The Founders page introduces the team behind Ocean Hub. Learn about the visionaries driving our mission to protect Kenya’s oceans. <br />
          <Link to="/founders" className="text-ocean-blue-500 hover:underline">Visit Founders Page</Link>
        </>
      );
    } else if (message.includes('navigate') || message.includes('how do i')) {
      return (
        <>
          Navigating Ocean Hub is easy! Use the navigation bar at the top to explore pages like Home, Marketplace, Tourism, and more. If you’re not logged in, some pages may redirect you to the login page. Need help with a specific page? Ask me about it! <br />
          You can start exploring from the <Link to="/" className="text-ocean-blue-500 hover:underline">Home Page</Link>.
        </>
      );
    } else {
      return (
        <>
          I’m not sure I understood that. Could you ask about a specific feature, like Coastal Tourism, Marketplace, or Events? Or try asking about navigation, like “How do I log in?” <br />
          You can also explore all features on the <Link to="/" className="text-ocean-blue-500 hover:underline">Home Page</Link>.
        </>
      );
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn-primary rounded-full p-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-ocean-blue-500"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 card flex flex-col animate-fade-in-up">
          {/* Header */}
          <div className="ocean-gradient rounded-t-lg p-4 flex justify-between items-center">
            <h3 className="text-lg font-semibold text-white">Ocean Hub Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 focus:outline-none"
              aria-label="Close chat"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto max-h-96 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 flex ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.sender === 'user'
                      ? 'bg-ocean-blue-500 text-white'
                      : 'bg-white text-gray-900 border border-ocean-blue-100'
                  }`}
                >
                  <span className="block">{msg.text}</span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-ocean-blue-100">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Ocean Hub..."
                className="flex-1 rounded-full border border-ocean-blue-100 px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-ocean-blue-500"
                aria-label="Type your message"
              />
              <button
                type="submit"
                className="btn-primary rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-ocean-blue-500"
                aria-label="Send message"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}