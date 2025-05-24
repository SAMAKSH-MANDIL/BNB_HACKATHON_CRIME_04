import React, { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  color: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color }) => {
  const getColorClass = () => {
    switch (color) {
      case 'primary':
        return 'bg-primary-500 bg-opacity-10 text-primary-600 dark:text-primary-400';
      case 'secondary':
        return 'bg-secondary-500 bg-opacity-10 text-secondary-600 dark:text-secondary-400';
      case 'accent':
        return 'bg-accent-500 bg-opacity-10 text-accent-600 dark:text-accent-400';
      case 'success':
        return 'bg-success-500 bg-opacity-10 text-success-500';
      case 'warning':
        return 'bg-warning-500 bg-opacity-10 text-warning-500';
      case 'error':
        return 'bg-error-500 bg-opacity-10 text-error-500';
      default:
        return 'bg-primary-500 bg-opacity-10 text-primary-600 dark:text-primary-400';
    }
  };

  return (
    <div className="card p-6 flex items-center">
      <div className={`rounded-full w-12 h-12 flex items-center justify-center mr-4 ${getColorClass()}`}>
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
          {title}
        </h3>
        <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
          {value}
        </p>
      </div>
    </div>
  );
};

export default StatCard;