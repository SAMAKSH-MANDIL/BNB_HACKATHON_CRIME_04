import React from 'react';
import { FileText, ChevronRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CriminalRecord } from '../../types/record.types';

interface RecordSummaryCardProps {
  record: CriminalRecord;
}

const RecordSummaryCard: React.FC<RecordSummaryCardProps> = ({ record }) => {
  const getSeverityClass = (severity?: string) => {
    switch (severity) {
      case 'minor':
        return 'bg-blue-500 bg-opacity-10 text-blue-700 dark:text-blue-400';
      case 'moderate':
        return 'bg-warning-500 bg-opacity-10 text-warning-500';
      case 'major':
        return 'bg-orange-500 bg-opacity-10 text-orange-700 dark:text-orange-400';
      case 'severe':
        return 'bg-error-500 bg-opacity-10 text-error-500';
      default:
        return 'bg-neutral-500 bg-opacity-10 text-neutral-700 dark:text-neutral-400';
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-blue-500 bg-opacity-10 text-blue-700 dark:text-blue-400';
      case 'closed':
        return 'bg-green-500 bg-opacity-10 text-green-700 dark:text-green-400';
      case 'expunged':
        return 'bg-neutral-500 bg-opacity-10 text-neutral-700 dark:text-neutral-400';
      case 'appealed':
        return 'bg-purple-500 bg-opacity-10 text-purple-700 dark:text-purple-400';
      default:
        return 'bg-neutral-500 bg-opacity-10 text-neutral-700 dark:text-neutral-400';
    }
  };

  return (
    <div className="flex items-start py-3 border-b border-neutral-200 dark:border-neutral-700 last:border-b-0">
      <div className="bg-neutral-200 dark:bg-neutral-700 rounded-full w-10 h-10 flex items-center justify-center mr-4 text-neutral-700 dark:text-neutral-300 flex-shrink-0">
        <FileText size={20} />
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
            {record.firstName} {record.lastName}
          </h3>
          <div className="flex items-center mt-1 sm:mt-0">
            <span className={`text-xs px-2 py-1 rounded-full ${getSeverityClass(record.aiClassification?.severity)}`}>
              {record.aiClassification?.severity || 'Unclassified'}
            </span>
            <span className={`text-xs px-2 py-1 rounded-full ml-2 ${getStatusClass(record.status)}`}>
              {record.status}
            </span>
          </div>
        </div>
        
        <div className="mt-1 flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              <span className="font-medium">Case:</span> {record.caseNumber}
            </p>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              <span className="font-medium">Offense:</span> {record.offenseType}
            </p>
          </div>
          
          <div className="mt-2 sm:mt-0 flex items-center">
            {record.blockchainData.verified && (
              <span className="blockchain-verified mr-3 text-xs">
                <Shield size={12} className="mr-1" /> Verified
              </span>
            )}
            
            <Link 
              to={`/records/${record.id}`}
              className="text-primary-600 dark:text-primary-400 text-xs hover:underline flex items-center"
            >
              View Details <ChevronRight size={14} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordSummaryCard;