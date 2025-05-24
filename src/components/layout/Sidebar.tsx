import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  Home, 
  FileText, 
  Search, 
  AlertTriangle, 
  Shield, 
  Users, 
  BarChart3, 
  Settings,
  X,
  Brain,
  FileCheck,
  History
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const { user, hasPermission } = useAuth();

  return (
    <aside className={`z-20 bg-white dark:bg-neutral-800 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static w-64 h-screen transition-transform duration-300 ease-in-out flex flex-col shadow-md`}>
      <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-700">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-md bg-primary-600 flex items-center justify-center mr-2">
            <Shield size={20} className="text-white" />
          </div>
          <span className="text-xl font-bold text-primary-700 dark:text-primary-400">
            SecureRecord
          </span>
        </div>
        <button
          className="md:hidden p-1 rounded-md text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none"
          onClick={toggleSidebar}
        >
          <X size={20} />
        </button>
      </div>
      
      <div className="px-6 py-2 border-b border-neutral-200 dark:border-neutral-700">
        <div className="flex items-center py-2">
          <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-2">
            {user?.name.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{user?.name}</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">{user?.organization}</p>
          </div>
        </div>
        <div className="mt-1">
          <span className="verified-badge">
            <span className="mr-1">✓</span> Verified {user?.role}
          </span>
        </div>
      </div>
      
      <nav className="flex-1 overflow-y-auto px-4 py-4">
        <ul className="space-y-1">
          <li>
            <NavLink
              to="/"
              className={({isActive}) => `flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-primary-100 dark:bg-primary-900 dark:bg-opacity-40 text-primary-700 dark:text-primary-400' : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700'}`}
            >
              <Home size={18} className="mr-3" />
              Dashboard
            </NavLink>
          </li>
          
          <li>
            <NavLink
              to="/records"
              className={({isActive}) => `flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-primary-100 dark:bg-primary-900 dark:bg-opacity-40 text-primary-700 dark:text-primary-400' : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700'}`}
            >
              <FileText size={18} className="mr-3" />
              Criminal Records
            </NavLink>
          </li>
          
          <li>
            <NavLink
              to="/search"
              className={({isActive}) => `flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-primary-100 dark:bg-primary-900 dark:bg-opacity-40 text-primary-700 dark:text-primary-400' : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700'}`}
            >
              <Search size={18} className="mr-3" />
              Advanced Search
            </NavLink>
          </li>
          
          {(hasPermission('court') || hasPermission('police') || hasPermission('admin')) && (
            <li>
              <NavLink
                to="/ai-analysis"
                className={({isActive}) => `flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-primary-100 dark:bg-primary-900 dark:bg-opacity-40 text-primary-700 dark:text-primary-400' : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700'}`}
              >
                <Brain size={18} className="mr-3" />
                AI Analysis
              </NavLink>
            </li>
          )}
          
          {(hasPermission('company') || hasPermission('admin')) && (
            <li>
              <NavLink
                to="/verification"
                className={({isActive}) => `flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-primary-100 dark:bg-primary-900 dark:bg-opacity-40 text-primary-700 dark:text-primary-400' : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700'}`}
              >
                <FileCheck size={18} className="mr-3" />
                Verification Requests
              </NavLink>
            </li>
          )}
          
          <li>
            <NavLink
              to="/audit-trail"
              className={({isActive}) => `flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-primary-100 dark:bg-primary-900 dark:bg-opacity-40 text-primary-700 dark:text-primary-400' : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700'}`}
            >
              <History size={18} className="mr-3" />
              Audit Trail
            </NavLink>
          </li>
          
          {hasPermission('admin') && (
            <>
              <li className="mt-6 mb-2">
                <h3 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                  Administration
                </h3>
              </li>
              
              <li>
                <NavLink
                  to="/alerts"
                  className={({isActive}) => `flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-primary-100 dark:bg-primary-900 dark:bg-opacity-40 text-primary-700 dark:text-primary-400' : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700'}`}
                >
                  <AlertTriangle size={18} className="mr-3" />
                  Security Alerts
                </NavLink>
              </li>
              
              <li>
                <NavLink
                  to="/users"
                  className={({isActive}) => `flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-primary-100 dark:bg-primary-900 dark:bg-opacity-40 text-primary-700 dark:text-primary-400' : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700'}`}
                >
                  <Users size={18} className="mr-3" />
                  User Management
                </NavLink>
              </li>
              
              <li>
                <NavLink
                  to="/analytics"
                  className={({isActive}) => `flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-primary-100 dark:bg-primary-900 dark:bg-opacity-40 text-primary-700 dark:text-primary-400' : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700'}`}
                >
                  <BarChart3 size={18} className="mr-3" />
                  Analytics
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-neutral-200 dark:border-neutral-700">
        <NavLink
          to="/settings"
          className={({isActive}) => `flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-primary-100 dark:bg-primary-900 dark:bg-opacity-40 text-primary-700 dark:text-primary-400' : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700'}`}
        >
          <Settings size={18} className="mr-3" />
          Settings
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;