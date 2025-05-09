import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Navbar() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-ocean-blue-600">Ocean Hub</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link
              to="/"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-ocean-blue-600 hover:text-ocean-blue-700"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-ocean-blue-600 hover:text-ocean-blue-700"
            >
              About
            </Link>
            <Link
              to="/founders"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-ocean-blue-600 hover:text-ocean-blue-700"
            >
              Founders
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-ocean-blue-600 hover:text-ocean-blue-700"
            >
              Contact
            </Link>
          </div>

          {/* User Section */}
          <div className="flex items-center">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 text-ocean-blue-600 hover:text-ocean-blue-700"
                >
                  <img
                    src={user.photoURL || 'https://via.placeholder.com/32'}
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{user.displayName || 'Profile'}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-ocean-blue-600 hover:text-ocean-blue-700"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-ocean-blue-600 hover:text-ocean-blue-700"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-ocean-blue-600 text-white px-4 py-2 rounded-md hover:bg-ocean-blue-700"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}