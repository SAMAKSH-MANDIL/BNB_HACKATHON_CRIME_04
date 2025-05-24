import React, { useState, useEffect } from 'react';
import { Shield, FileText, User, Bell, Clock, FileCheck, AlertTriangle, Search } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useBlockchain } from '../../context/BlockchainContext';
import { mockCriminalRecords, mockVerificationRequests } from '../../services/mockData';
import StatCard from './StatCard';
import RecentActivityCard from './RecentActivityCard';
import RecordSummaryCard from './RecordSummaryCard';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const { isConnected, walletAddress } = useBlockchain();
  const [recentRecords, setRecentRecords] = useState(mockCriminalRecords.slice(0, 3));
  const [pendingRequests, setPendingRequests] = useState(
    mockVerificationRequests.filter(r => r.status === 'pending')
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Dashboard
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Welcome back, {user?.name}
          </p>
        </div>
        
        {isConnected ? (
          <div className="mt-2 md:mt-0 blockchain-verified">
            <Shield size={16} className="mr-1" />
            <span className="text-sm">Blockchain Connected: {walletAddress?.slice(0, 6)}...{walletAddress?.slice(-4)}</span>
          </div>
        ) : (
          <div className="mt-2 md:mt-0 text-warning-500 text-sm flex items-center">
            <AlertTriangle size={16} className="mr-1" />
            <span>Blockchain disconnected</span>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total Records" 
          value={mockCriminalRecords.length.toString()}
          icon={<FileText size={20} />}
          color="primary"
        />
        <StatCard 
          title="Pending Verifications" 
          value={pendingRequests.length.toString()}
          icon={<FileCheck size={20} />}
          color="secondary"
        />
        <StatCard 
          title="Active Users" 
          value="24"
          icon={<User size={20} />}
          color="accent"
        />
        <StatCard 
          title="Security Alerts" 
          value="3"
          icon={<Bell size={20} />}
          color="error"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="card p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                Recent Records
              </h2>
              <a href="/records" className="text-primary-600 dark:text-primary-400 text-sm hover:underline flex items-center">
                View All <Search size={16} className="ml-1" />
              </a>
            </div>
            
            <div className="space-y-4">
              {recentRecords.map(record => (
                <RecordSummaryCard key={record.id} record={record} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="card p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                Recent Activity
              </h2>
              <a href="/audit-trail" className="text-primary-600 dark:text-primary-400 text-sm hover:underline flex items-center">
                View All <Clock size={16} className="ml-1" />
              </a>
            </div>
            
            <div className="space-y-3">
              <RecentActivityCard 
                icon={<Search size={16} />}
                title="Search Performed"
                description="John Doe's records were searched"
                time="2 hours ago"
                user="Chief Johnson"
              />
              <RecentActivityCard 
                icon={<FileCheck size={16} />}
                title="Verification Request"
                description="New background check request from XYZ Industries"
                time="5 hours ago"
                user="System"
              />
              <RecentActivityCard 
                icon={<FileText size={16} />}
                title="Record Updated"
                description="Case CR-2023-12345 status changed to closed"
                time="Yesterday"
                user="Judge Smith"
              />
              <RecentActivityCard 
                icon={<User size={16} />}
                title="New User Verified"
                description="Company ABC Corporation was verified"
                time="2 days ago"
                user="System Admin"
              />
            </div>
          </div>
          
          {user?.role === 'admin' && (
            <div className="card p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  System Health
                </h2>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">Blockchain Status</span>
                  <span className="text-sm text-success-500 flex items-center">
                    <Shield size={14} className="mr-1" /> Operational
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">API Latency</span>
                  <span className="text-sm text-success-500">45ms</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">AI System</span>
                  <span className="text-sm text-success-500">Active</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">Storage Usage</span>
                  <span className="text-sm text-warning-500">76%</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">Last Backup</span>
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">Today, 04:30 AM</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;