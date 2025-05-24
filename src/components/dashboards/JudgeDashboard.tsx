import React from 'react';
import { UserCheck, FileText, Scale, Calendar } from 'lucide-react';

const JudgeDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-neutral-100">Judge Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card p-6 glass glow-hover">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-primary-500/20 text-primary-400">
              <UserCheck size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-neutral-400">Assigned Cases</p>
              <p className="text-2xl font-bold text-neutral-100">42</p>
            </div>
          </div>
        </div>

        <div className="card p-6 glass glow-hover">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-secondary-500/20 text-secondary-400">
              <FileText size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-neutral-400">Pending Review</p>
              <p className="text-2xl font-bold text-neutral-100">18</p>
            </div>
          </div>
        </div>

        <div className="card p-6 glass glow-hover">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-accent-500/20 text-accent-400">
              <Scale size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-neutral-400">Judgments</p>
              <p className="text-2xl font-bold text-neutral-100">156</p>
            </div>
          </div>
        </div>

        <div className="card p-6 glass glow-hover">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-success-500/20 text-success-500">
              <Calendar size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-neutral-400">Hearings Today</p>
              <p className="text-2xl font-bold text-neutral-100">6</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h2 className="text-lg font-semibold mb-4">Upcoming Hearings</h2>
          <div className="space-y-4">
            {/* Add hearings list here */}
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Judgments</h2>
          <div className="space-y-4">
            {/* Add judgments list here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JudgeDashboard;