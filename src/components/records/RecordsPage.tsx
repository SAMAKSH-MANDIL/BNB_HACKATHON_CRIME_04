import React, { useState, useEffect } from 'react';
import { Search, Filter, RefreshCw, FileText, Shield } from 'lucide-react';
import { mockCriminalRecords } from '../../services/mockData';
import { CriminalRecord, SearchFilters } from '../../types/record.types';
import RecordListItem from './RecordListItem';
import FilterPanel from './FilterPanel';

const RecordsPage: React.FC = () => {
  const [records, setRecords] = useState<CriminalRecord[]>(mockCriminalRecords);
  const [filteredRecords, setFilteredRecords] = useState<CriminalRecord[]>(mockCriminalRecords);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    filterRecords();
  }, [searchTerm, filters]);

  const filterRecords = () => {
    setIsLoading(true);
    
    // Simulate API request delay
    setTimeout(() => {
      let results = [...records];
      
      // Apply search term filter
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        results = results.filter(record => 
          `${record.firstName} ${record.lastName}`.toLowerCase().includes(term) ||
          record.caseNumber.toLowerCase().includes(term) ||
          record.nationalId.toLowerCase().includes(term) ||
          record.offenseType.toLowerCase().includes(term)
        );
      }
      
      // Apply additional filters
      if (filters.name) {
        const name = filters.name.toLowerCase();
        results = results.filter(record => 
          `${record.firstName} ${record.lastName}`.toLowerCase().includes(name)
        );
      }
      
      if (filters.nationalId) {
        results = results.filter(record => 
          record.nationalId.includes(filters.nationalId!)
        );
      }
      
      if (filters.offenseType) {
        results = results.filter(record => 
          record.offenseType.toLowerCase().includes(filters.offenseType!.toLowerCase())
        );
      }
      
      if (filters.status) {
        results = results.filter(record => 
          record.status === filters.status
        );
      }
      
      if (filters.severity) {
        results = results.filter(record => 
          record.aiClassification?.severity === filters.severity
        );
      }
      
      setFilteredRecords(results);
      setIsLoading(false);
    }, 500);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const applyFilters = (newFilters: SearchFilters) => {
    setFilters(newFilters);
  };

  const resetFilters = () => {
    setFilters({});
    setSearchTerm('');
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Criminal Records
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            View, search, and manage criminal records
          </p>
        </div>
        
        <div className="flex mt-4 md:mt-0">
          <button
            onClick={toggleFilters}
            className="btn-secondary flex items-center mr-2"
          >
            <Filter size={16} className="mr-1" />
            Filters
          </button>
          
          <button
            onClick={resetFilters}
            className="btn-accent flex items-center"
          >
            <RefreshCw size={16} className="mr-1" />
            Reset
          </button>
        </div>
      </div>
      
      <div className="card mb-6">
        <div className="p-4 border-b border-neutral-200 dark:border-neutral-700">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search size={18} className="text-neutral-500 dark:text-neutral-400" />
            </div>
            <input
              type="search"
              className="input pl-10 w-full"
              placeholder="Search by name, ID, case number, or offense type..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        
        {showFilters && (
          <FilterPanel 
            filters={filters}
            applyFilters={applyFilters}
            closeFilters={() => setShowFilters(false)}
          />
        )}
      </div>
      
      <div className="card">
        <div className="p-4 border-b border-neutral-200 dark:border-neutral-700 flex justify-between items-center">
          <div className="flex items-center">
            <FileText size={18} className="text-neutral-500 dark:text-neutral-400 mr-2" />
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              Records
            </h2>
          </div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            {filteredRecords.length} records found
          </div>
        </div>
        
        <div className="overflow-x-auto">
          {isLoading ? (
            <div className="p-8 flex justify-center">
              <div className="animate-pulse-slow text-primary-600 dark:text-primary-400 flex flex-col items-center">
                <div className="w-10 h-10 border-4 border-current border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-sm">Loading records...</p>
              </div>
            </div>
          ) : filteredRecords.length === 0 ? (
            <div className="p-8 text-center">
              <div className="w-16 h-16 mx-auto bg-neutral-200 dark:bg-neutral-700 rounded-full flex items-center justify-center mb-4">
                <Search size={24} className="text-neutral-500 dark:text-neutral-400" />
              </div>
              <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-1">
                No records found
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            <div className="divide-y divide-neutral-200 dark:divide-neutral-700">
              {filteredRecords.map(record => (
                <RecordListItem key={record.id} record={record} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecordsPage;