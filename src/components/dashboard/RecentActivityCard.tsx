import React, { ReactNode } from 'react';

interface RecentActivityCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  time: string;
  user: string;
}

const RecentActivityCard: React.FC<RecentActivityCardProps> = ({ 
  icon, 
  title, 
  description, 
  time, 
  user 
}) => {
  return (
    <div className="flex items-start py-2 border-b border-neutral-200 dark:border-neutral-700 last:border-b-0">
      <div className="bg-neutral-200 dark:bg-neutral-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-neutral-700 dark:text-neutral-300 flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <h4 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 truncate">
            {title}
          </h4>
          <span className="text-xs text-neutral-500 dark:text-neutral-400 whitespace-nowrap ml-2">
            {time}
          </span>
        </div>
        <p className="text-xs text-neutral-600 dark:text-neutral-400 truncate">
          {description}
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">
          By: {user}
        </p>
      </div>
    </div>
  );
};

export default RecentActivityCard;