import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { SearchFilters } from '../../types/record.types';

interface FilterPanelProps {
  filters: SearchFilters;
  applyFilters: (filters: SearchFilters) => void;
  closeFilters: () => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ filters, applyFilters, closeFilters }) => {
  const [localFilters, setLocalFilters] = useState<SearchFilters>(filters);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setLocalFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    applyFilters(localFilters);
    closeFilters();
  };

  const handleReset = () => {
    setLocalFilters({});
  };

  return (
    <div className="p-4 border-b border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
          Advanced Filters
        </h3>
        <button 
          onClick={closeFilters}
          className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
        >
          <X size={20} />
        </button>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={localFilters.name || ''}
              onChange={handleChange}
              className="input w-full"
              placeholder="Search by name"
            />
          </div>
          
          <div>
            <label htmlFor="nationalId" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              National ID
            </label>
            <input
              type="text"
              id="nationalId"
              name="nationalId"
              value={localFilters.nationalId || ''}
              onChange={handleChange}
              className="input w-full"
              placeholder="ID number"
            />
          </div>
          
          <div>
            <label htmlFor="offenseType" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Offense Type
            </label>
            <input
              type="text"
              id="offenseType"
              name="offenseType"
              value={localFilters.offenseType || ''}
              onChange={handleChange}
              className="input w-full"
              placeholder="Type of offense"
            />
          </div>
          
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={localFilters.status || ''}
              onChange={handleChange}
              className="input w-full"
            >
              <option value="">All Statuses</option>
              <option value="active">Active</option>
              <option value="closed">Closed</option>
              <option value="expunged">Expunged</option>
              <option value="appealed">Appealed</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="severity" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Severity (AI Classification)
            </label>
            <select
              id="severity"
              name="severity"
              value={localFilters.severity || ''}
              onChange={handleChange}
              className="input w-full"
            >
              <option value="">All Severities</option>
              <option value="minor">Minor</option>
              <option value="moderate">Moderate</option>
              <option value="major">Major</option>
              <option value="severe">Severe</option>
            </select>
          </div>
        </div>
        
        <div className="mt-4 flex justify-end space-x-3">
          <button
            type="button"
            onClick={handleReset}
            className="py-2 px-4 border border-neutral-300 dark:border-neutral-600 rounded-md shadow-sm bg-white dark:bg-neutral-700 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Reset
          </button>
          <button
            type="submit"
            className="btn-primary"
          >
            Apply Filters
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterPanel;