import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { NavLink } from 'react-router-dom';
import { Gavel, Shield, UserCheck } from 'lucide-react';

const RoleBasedTabs: React.FC = () => {
  const { user } = useAuth();

  const tabs = [
    {
      id: 'court',
      label: 'Court Dashboard',
      icon: <Gavel size={18} />,
      path: '/court',
      roles: ['court', 'admin']
    },
    {
      id: 'police',
      label: 'Police Dashboard',
      icon: <Shield size={18} />,
      path: '/police',
      roles: ['police', 'admin']
    },
    {
      id: 'judge',
      label: 'Judge Dashboard',
      icon: <UserCheck size={18} />,
      path: '/judge',
      roles: ['court', 'admin']
    }
  ];

  const allowedTabs = tabs.filter(tab => 
    tab.roles.includes(user?.role || '')
  );

  if (allowedTabs.length === 0) return null;

  return (
    <div className="flex space-x-2">
      {allowedTabs.map(tab => (
        <NavLink
          key={tab.id}
          to={tab.path}
          className={({ isActive }) =>
            `flex items-center px-4 py-2 rounded-md transition-all duration-200 ${
              isActive ? 'tab-active glow' : 'tab-inactive glass-hover'
            }`
          }
        >
          <span className="mr-2">{tab.icon}</span>
          {tab.label}
        </NavLink>
      ))}
    </div>
  );
};

export default RoleBasedTabs;