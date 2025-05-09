import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../../context/AuthContext';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Marketplace', href: '/marketplace' },
  { name: 'Illegal Fishing Tracker', href: '/illegal-fishing-tracker' },
  { name: 'Community', href: '/community' },
  { name: 'Events', href: '/events' },
  { name: 'Weather Monitor', href: '/weather' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="bg-gradient-to-r from-ocean-blue-500 to-deep-sea-500 shadow-lg relative z-50">
      <div className="absolute inset-0 bg-wave-pattern opacity-10"></div>
      <nav className="mx-auto max-w-7xl px-6 py-4 lg:px-8 relative" aria-label="Global">
        <div className="flex items-center justify-between">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 18.5V20H3V18.5C3 15.4624 5.46243 13 8.5 13H15.5C18.5376 13 21 15.4624 21 18.5ZM12 11C9.23858 11 7 8.76142 7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6C17 8.76142 14.7614 11 12 11Z"/>
              </svg>
              <span className="text-2xl font-bold text-white ml-2">OceanHub</span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-semibold leading-6 text-white hover:text-ocean-blue-200 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-white">
                  {user?.name || user?.email}
                </span>
                <button 
                  onClick={handleLogout}
                  className="text-sm font-semibold leading-6 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full transition-colors"
                >
                  Log out
                </button>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="text-sm font-semibold leading-6 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full transition-colors"
              >
                Log in <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50">
            <div className="fixed inset-0 bg-black/30" onClick={() => setMobileMenuOpen(false)} />
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-deep-sea-500 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
              <div className="flex items-center justify-between">
                <Link to="/" className="-m-1.5 p-1.5">
                  <span className="text-2xl font-bold text-white">OceanHub</span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-white/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-ocean-blue-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    {isAuthenticated ? (
                      <div className="space-y-2">
                        <div className="px-3 py-2 text-base font-semibold text-white">
                          {user?.name || user?.email}
                        </div>
                        <button
                          onClick={() => {
                            handleLogout();
                            setMobileMenuOpen(false);
                          }}
                          className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-ocean-blue-600"
                        >
                          Log out
                        </button>
                      </div>
                    ) : (
                      <Link
                        to="/login"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-ocean-blue-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Log in
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 