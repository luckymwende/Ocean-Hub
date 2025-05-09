import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Check if user is already logged in from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const signup = async (email, password, displayName) => {
    try {
      setError('');
      
      // Check if user already exists
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      if (users.some(u => u.email === email)) {
        throw new Error('Email already in use');
      }
      
      // Create new user
      const newUser = {
        id: Date.now().toString(),
        email,
        displayName,
        photoURL: null,
        bio: '',
        location: '',
        organization: '',
        interests: ''
      };
      
      // Add to users list
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      
      // Set as current user
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      
      return newUser;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // eslint-disable-next-line no-unused-vars
  const login = async (email, password) => {
    try {
      setError('');
      
      // Find user in localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.email === email);
      
      if (!user) {
        throw new Error('Invalid email or password');
      }
      
      // In a real app, you would verify the password here
      // For this demo, we'll just check if the user exists
      
      // Set as current user
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      
      return true;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const logout = async () => {
    try {
      setError('');
      setUser(null);
      localStorage.removeItem('user');
      return true;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const updateUserProfile = async (profileData) => {
    try {
      setError('');
      
      if (!user) {
        throw new Error('No user logged in');
      }
      
      // Update user data
      const updatedUser = {
        ...user,
        displayName: profileData.displayName,
        photoURL: profileData.profilePicture ? URL.createObjectURL(profileData.profilePicture) : user.photoURL,
        bio: profileData.bio,
        location: profileData.location,
        organization: profileData.organization,
        interests: profileData.interests
      };
      
      // Update in localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const updatedUsers = users.map(u => 
        u.id === user.id ? updatedUser : u
      );
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      
      // Update current user
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      
      return true;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const value = {
    user,
    loading,
    error,
    signup,
    login,
    logout,
    updateUserProfile,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
} 