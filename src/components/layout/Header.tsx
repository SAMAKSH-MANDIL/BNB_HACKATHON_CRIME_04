import React, { useState } from 'react';
import { Bell, Search, Menu, Moon, Sun, LogOut, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useBlockchain } from '../../context/BlockchainContext';
import { Link } from 'react-router-dom';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const { user, logout } = useAuth();
  const { walletAddress, isConnected } = useBlockchain();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="z-10 py-4 bg-white dark:bg-neutral-800 shadow-sm">
      <div className="flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <button 
            onClick={toggleSidebar}
            className="p-1 mr-4 -ml-1 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none"
          >
            <Menu size={24} />
          </button>
          
          <div className="md:hidden flex items-center">
            <Link to="/" className="text-xl font-bold text-primary-700 dark:text-primary-400">
              SecureRecord
            </Link>
          </div>
        </div>
        
        <div className="hidden md:flex md:flex-1 mx-4">
          <div className="relative w-full max-w-xl mr-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search size={18} className="text-neutral-500 dark:text-neutral-400" />
            </div>
            <input
              className="input pl-10 w-full"
              type="search"
              placeholder="Search records, cases, or reports..."
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <button
            className="p-1 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button className="p-1 relative rounded-full text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none">
            <Bell size={20} />
            <span className="absolute top-0 right-0 h-2 w-2 bg-error-500 rounded-full"></span>
          </button>
          
          <div className="relative">
            <button
              onClick={toggleUserMenu}
              className="flex items-center text-sm p-1 rounded-full focus:outline-none"
            >
              <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center">
                {user?.name.charAt(0)}
              </div>
            </button>
            
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-neutral-800 rounded-md shadow-lg z-50 py-1">
                <div className="px-4 py-2 border-b border-neutral-200 dark:border-neutral-700">
                  <p className="text-sm font-medium">{user?.name}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
                    {user?.email}
                  </p>
                  {isConnected && (
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate mt-1">
                      {walletAddress?.slice(0, 6)}...{walletAddress?.slice(-4)}
                    </p>
                  )}
                </div>
                
                <Link
                  to="/profile"
                  className="flex items-center px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                  onClick={() => setShowUserMenu(false)}
                >
                  <User size={16} className="mr-2" />
                  Profile
                </Link>
                
                <button
                  className="flex w-full items-center px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                  onClick={handleLogout}
                >
                  <LogOut size={16} className="mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;