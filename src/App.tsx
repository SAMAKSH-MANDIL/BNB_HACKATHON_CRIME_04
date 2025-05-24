import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { BlockchainProvider } from './context/BlockchainContext';
import LoginForm from './components/auth/LoginForm';
import MainLayout from './components/layout/MainLayout';
import DashboardPage from './components/dashboard/DashboardPage';
import RecordsPage from './components/records/RecordsPage';
import AIAnalysisPage from './components/ai/AIAnalysisPage';
import CourtDashboard from './components/dashboards/CourtDashboard';
import PoliceDashboard from './components/dashboards/PoliceDashboard';
import JudgeDashboard from './components/dashboards/JudgeDashboard';

function App() {
  useEffect(() => {
    document.title = 'SecureRecord - Blockchain Criminal Record System';
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <BlockchainProvider>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            
            <Route path="/" element={<MainLayout />}>
              <Route index element={<DashboardPage />} />
              <Route path="records" element={<RecordsPage />} />
              <Route path="ai-analysis" element={<AIAnalysisPage />} />
              <Route path="court" element={<CourtDashboard />} />
              <Route path="police" element={<PoliceDashboard />} />
              <Route path="judge" element={<JudgeDashboard />} />
              <Route path="search" element={<div className="p-8 text-center">Advanced Search Page - Coming Soon</div>} />
              <Route path="verification" element={<div className="p-8 text-center">Verification Requests - Coming Soon</div>} />
              <Route path="audit-trail" element={<div className="p-8 text-center">Audit Trail - Coming Soon</div>} />
              <Route path="alerts" element={<div className="p-8 text-center">Security Alerts - Coming Soon</div>} />
              <Route path="users" element={<div className="p-8 text-center">User Management - Coming Soon</div>} />
              <Route path="analytics" element={<div className="p-8 text-center">Analytics - Coming Soon</div>} />
              <Route path="settings" element={<div className="p-8 text-center">Settings - Coming Soon</div>} />
              <Route path="profile" element={<div className="p-8 text-center">User Profile - Coming Soon</div>} />
            </Route>
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BlockchainProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;