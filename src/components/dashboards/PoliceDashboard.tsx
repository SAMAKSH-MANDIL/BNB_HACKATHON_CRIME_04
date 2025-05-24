import React from 'react';
import { Shield, UserX, AlertTriangle, FileCheck } from 'lucide-react';

const PoliceDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-neutral-100">Police Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card p-6 glass glow-hover">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-primary-500/20 text-primary-400">
              <Shield size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-neutral-400">Active Cases</p>
              <p className="text-2xl font-bold text-neutral-100">284</p>
            </div>
          </div>
        </div>

        <div className="card p-6 glass glow-hover">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-error-500/20 text-error-500">
              <UserX size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-neutral-400">Wanted Persons</p>
              <p className="text-2xl font-bold text-neutral-100">48</p>
            </div>
          </div>
        </div>

        <div className="card p-6 glass glow-hover">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-warning-500/20 text-warning-500">
              <AlertTriangle size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-neutral-400">High Priority</p>
              <p className="text-2xl font-bold text-neutral-100">15</p>
            </div>
          </div>
        </div>

        <div className="card p-6 glass glow-hover">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-success-500/20 text-success-500">
              <FileCheck size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-neutral-400">Solved Cases</p>
              <p className="text-2xl font-bold text-neutral-100">1,247</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Reports</h2>
          <div className="space-y-4">
            {/* Add reports list here */}
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-lg font-semibold mb-4">Active Investigations</h2>
          <div className="space-y-4">
            {/* Add investigations list here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliceDashboard;