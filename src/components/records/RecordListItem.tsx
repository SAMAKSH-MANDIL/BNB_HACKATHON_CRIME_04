import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, ChevronRight } from 'lucide-react';
import { CriminalRecord } from '../../types/record.types';

interface RecordListItemProps {
  record: CriminalRecord;
}

const RecordListItem: React.FC<RecordListItemProps> = ({ record }) => {
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
    <div className="p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors duration-150">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="flex items-center mb-3 md:mb-0 md:mr-4 md:w-1/3">
          <div className="bg-neutral-200 dark:bg-neutral-700 rounded-full w-10 h-10 flex items-center justify-center mr-3 text-neutral-700 dark:text-neutral-300 flex-shrink-0">
            <FileText size={20} />
          </div>
          <div>
            <h3 className="text-base font-medium text-neutral-900 dark:text-neutral-100">
              {record.firstName} {record.lastName}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              ID: {record.nationalId}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:flex-1">
          <div>
            <p className="text-xs text-neutral-500 dark:text-neutral-500">Case Number</p>
            <p className="text-sm text-neutral-800 dark:text-neutral-200">{record.caseNumber}</p>
          </div>
          
          <div>
            <p className="text-xs text-neutral-500 dark:text-neutral-500">Offense Type</p>
            <p className="text-sm text-neutral-800 dark:text-neutral-200">{record.offenseType}</p>
          </div>
          
          <div>
            <p className="text-xs text-neutral-500 dark:text-neutral-500">Status</p>
            <span className={`text-xs px-2 py-1 rounded-full inline-block mt-1 ${getStatusClass(record.status)}`}>
              {record.status}
            </span>
          </div>
          
          <div>
            <p className="text-xs text-neutral-500 dark:text-neutral-500">AI Classification</p>
            <span className={`text-xs px-2 py-1 rounded-full inline-block mt-1 ${getSeverityClass(record.aiClassification?.severity)}`}>
              {record.aiClassification?.severity || 'Unclassified'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4 md:mt-0 md:ml-4">
          {record.blockchainData.verified && (
            <span className="blockchain-verified mr-3">
              <Shield size={14} className="mr-1" /> Verified
            </span>
          )}
          
          <Link 
            to={`/records/${record.id}`}
            className="text-primary-600 dark:text-primary-400 hover:underline flex items-center"
          >
            Details <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecordListItem;