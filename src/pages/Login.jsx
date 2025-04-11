import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Here you would typically make an API call to your backend
      console.log('Logging in with:', formData);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, let's just redirect to home
      navigate('/');
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-ocean-blue-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <svg className="w-12 h-12 text-ocean-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 18.5V20H3V18.5C3 15.4624 5.46243 13 8.5 13H15.5C18.5376 13 21 15.4624 21 18.5ZM12 11C9.23858 11 7 8.76142 7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6C17 8.76142 14.7614 11 12 11Z"/>
          </svg>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-ocean-blue-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-ocean-blue-600">
          Or{' '}
          <Link to="/signup" className="font-medium text-ocean-blue-600 hover:text-ocean-blue-500">
            create a new account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="rounded-md bg-red-50 p-4">
                <div className="flex">
                  <div className="text-sm text-red-700">{error}</div>
                </div>
              </div>
            )}
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ocean-blue-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-ocean-blue-500 focus:ring-ocean-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-ocean-blue-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-ocean-blue-500 focus:ring-ocean-blue-500"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-ocean-blue-600 focus:ring-ocean-blue-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-ocean-blue-700">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link to="/forgot-password" className="font-medium text-ocean-blue-600 hover:text-ocean-blue-500">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full justify-center rounded-md bg-ocean-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-ocean-blue-700 focus:outline-none focus:ring-2 focus:ring-ocean-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Signing in...' : 'Sign in'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 