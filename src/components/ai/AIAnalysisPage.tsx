import React, { useState } from 'react';
import { Brain, BarChart3, Search, AlertTriangle, CheckCircle, Circle, Zap } from 'lucide-react';
import { mockAiAnalysisResults, mockCriminalRecords } from '../../services/mockData';
import { CriminalRecord } from '../../types/record.types';

const AIAnalysisPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecord, setSelectedRecord] = useState<CriminalRecord | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredRecords = searchTerm 
    ? mockCriminalRecords.filter(record => 
        `${record.firstName} ${record.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.caseNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.nationalId.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleSelectRecord = (record: CriminalRecord) => {
    setSelectedRecord(record);
    setAnalysisComplete(false);
    setSearchTerm('');
  };

  const runAnalysis = () => {
    if (!selectedRecord) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }, 2500);
  };

  // Find analysis result for selected record
  const analysisResult = selectedRecord 
    ? mockAiAnalysisResults.find(result => result.recordId === selectedRecord.id)
    : null;

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            AI Analysis
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Advanced analysis and pattern recognition
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="card p-6 mb-6">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4 flex items-center">
              <Brain size={20} className="mr-2 text-primary-600 dark:text-primary-400" />
              AI Analysis Tools
            </h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="recordSearch" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Search Record for Analysis
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search size={16} className="text-neutral-500 dark:text-neutral-400" />
                  </div>
                  <input
                    type="search"
                    id="recordSearch"
                    className="input pl-10 w-full"
                    placeholder="Search by name, ID, or case number"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>
                
                {searchTerm && (
                  <div className="mt-2 max-h-60 overflow-y-auto border border-neutral-200 dark:border-neutral-700 rounded-md">
                    {filteredRecords.length > 0 ? (
                      <ul className="divide-y divide-neutral-200 dark:divide-neutral-700">
                        {filteredRecords.map(record => (
                          <li 
                            key={record.id}
                            className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer"
                            onClick={() => handleSelectRecord(record)}
                          >
                            <div className="flex items-center">
                              <div className="bg-neutral-200 dark:bg-neutral-700 rounded-full w-8 h-8 flex items-center justify-center mr-2 text-neutral-700 dark:text-neutral-300">
                                {record.firstName.charAt(0)}
                              </div>
                              <div>
                                <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                                  {record.firstName} {record.lastName}
                                </p>
                                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                  {record.caseNumber} • {record.nationalId}
                                </p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="p-3 text-center text-neutral-600 dark:text-neutral-400 text-sm">
                        No records found
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              {selectedRecord && (
                <div className="mt-4">
                  <div className="p-3 border border-neutral-200 dark:border-neutral-700 rounded-md bg-neutral-50 dark:bg-neutral-800">
                    <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                      Selected Record:
                    </p>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300">
                      {selectedRecord.firstName} {selectedRecord.lastName}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {selectedRecord.caseNumber} • {selectedRecord.offenseType}
                    </p>
                  </div>
                  
                  <button
                    onClick={runAnalysis}
                    disabled={isAnalyzing}
                    className="btn-primary w-full mt-3 flex justify-center items-center"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Brain size={16} className="mr-2" />
                        Run AI Analysis
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
          
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              AI Capabilities
            </h2>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-primary-500 bg-opacity-10 text-primary-600 dark:text-primary-400 rounded-full p-1 mr-2 mt-0.5">
                  <BarChart3 size={14} />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    Pattern Recognition
                  </p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    Identify behavioral and crime patterns across cases
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-secondary-500 bg-opacity-10 text-secondary-600 dark:text-secondary-400 rounded-full p-1 mr-2 mt-0.5">
                  <AlertTriangle size={14} />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    Risk Assessment
                  </p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    Calculate recidivism risk based on historical data
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-accent-500 bg-opacity-10 text-accent-600 dark:text-accent-400 rounded-full p-1 mr-2 mt-0.5">
                  <CheckCircle size={14} />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    Verification Enhancement
                  </p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    Improve background check accuracy and context
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-success-500 bg-opacity-10 text-success-500 rounded-full p-1 mr-2 mt-0.5">
                  <Zap size={14} />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    Recommended Actions
                  </p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    AI-generated suggestions for case management
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          {!selectedRecord && (
            <div className="card p-6 h-full flex flex-col items-center justify-center text-center">
              <Brain size={48} className="text-neutral-400 dark:text-neutral-600 mb-4" />
              <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                No Record Selected
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 max-w-md">
                Select a criminal record to analyze using our advanced AI system. The system will identify patterns, assess risks, and provide recommendations.
              </p>
            </div>
          )}
          
          {selectedRecord && isAnalyzing && (
            <div className="card p-6 h-full flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 border-4 border-primary-600 dark:border-primary-400 border-t-transparent rounded-full animate-spin mb-6"></div>
              <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                AI Analysis in Progress
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 max-w-md">
                Our AI is analyzing the criminal record and related data. This may take a few moments.
              </p>
              <div className="w-full max-w-md mt-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-neutral-600 dark:text-neutral-400">
                    <span>Loading record data</span>
                    <span>Complete</span>
                  </div>
                  <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                    <div className="bg-primary-600 dark:bg-primary-400 h-2 rounded-full w-full"></div>
                  </div>
                </div>
                
                <div className="space-y-2 mt-3">
                  <div className="flex justify-between text-xs text-neutral-600 dark:text-neutral-400">
                    <span>Pattern analysis</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                    <div className="bg-primary-600 dark:bg-primary-400 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
                
                <div className="space-y-2 mt-3">
                  <div className="flex justify-between text-xs text-neutral-600 dark:text-neutral-400">
                    <span>Risk assessment</span>
                    <span>40%</span>
                  </div>
                  <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                    <div className="bg-primary-600 dark:bg-primary-400 h-2 rounded-full w-2/5"></div>
                  </div>
                </div>
                
                <div className="space-y-2 mt-3">
                  <div className="flex justify-between text-xs text-neutral-600 dark:text-neutral-400">
                    <span>Generating recommendations</span>
                    <span>10%</span>
                  </div>
                  <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                    <div className="bg-primary-600 dark:bg-primary-400 h-2 rounded-full w-1/10"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {selectedRecord && analysisComplete && analysisResult && (
            <div className="space-y-6">
              <div className="card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 flex items-center">
                    <Brain size={20} className="mr-2 text-primary-600 dark:text-primary-400" />
                    Analysis Results
                  </h2>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    {new Date(analysisResult.timestamp * 1000).toLocaleString()}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="card p-4 bg-neutral-50 dark:bg-neutral-800">
                    <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2">
                      Severity Score
                    </h3>
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center border-4 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 text-xl font-bold mr-3">
                        {analysisResult.severityScore}
                      </div>
                      <div>
                        <p className="text-sm text-neutral-900 dark:text-neutral-100">
                          {analysisResult.severityScore < 30 ? 'Low' : 
                           analysisResult.severityScore < 60 ? 'Medium' : 'High'} Severity
                        </p>
                        <p className="text-xs text-neutral-600 dark:text-neutral-400">
                          Based on offense analysis
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card p-4 bg-neutral-50 dark:bg-neutral-800">
                    <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2">
                      Recidivism Risk
                    </h3>
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center border-4 border-accent-600 dark:border-accent-400 text-accent-600 dark:text-accent-400 text-xl font-bold mr-3">
                        {analysisResult.recidivismRisk}%
                      </div>
                      <div>
                        <p className="text-sm text-neutral-900 dark:text-neutral-100">
                          {analysisResult.recidivismRisk < 30 ? 'Low' : 
                           analysisResult.recidivismRisk < 60 ? 'Medium' : 'High'} Risk
                        </p>
                        <p className="text-xs text-neutral-600 dark:text-neutral-400">
                          Likelihood of reoffending
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card p-4 bg-neutral-50 dark:bg-neutral-800">
                    <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2">
                      Pattern Match
                    </h3>
                    <div>
                      <p className="text-sm text-neutral-900 dark:text-neutral-100 mb-1">
                        {analysisResult.similarCases.length} similar cases found
                      </p>
                      <div className="flex items-center">
                        <div className="flex -space-x-2 mr-2">
                          {[...Array(Math.min(3, analysisResult.similarCases.length))].map((_, i) => (
                            <div key={i} className="w-8 h-8 rounded-full bg-primary-600 dark:bg-primary-500 flex items-center justify-center text-white text-xs border-2 border-white dark:border-neutral-800">
                              {String.fromCharCode(65 + i)}
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-neutral-600 dark:text-neutral-400">
                          {analysisResult.similarCases.length > 3 ? `+${analysisResult.similarCases.length - 3} more` : ''}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card p-6">
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                    Detected Patterns
                  </h3>
                  <ul className="space-y-2">
                    {analysisResult.detectedPatterns.map((pattern, index) => (
                      <li key={index} className="flex items-center text-sm text-neutral-700 dark:text-neutral-300">
                        <Circle size={8} className="mr-2 text-primary-600 dark:text-primary-400" />
                        {pattern}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="card p-6">
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                    Recommended Actions
                  </h3>
                  <ul className="space-y-2">
                    {analysisResult.recommendedActions.map((action, index) => (
                      <li key={index} className="flex items-center text-sm text-neutral-700 dark:text-neutral-300">
                        <CheckCircle size={14} className="mr-2 text-success-500" />
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="card p-6">
                <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                  Similar Cases
                </h3>
                <div className="space-y-4">
                  {analysisResult.similarCases.map((similarCase, index) => (
                    <div key={index} className="p-4 border border-neutral-200 dark:border-neutral-700 rounded-md">
                      <div className="flex justify-between mb-2">
                        <h4 className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                          Case {similarCase.caseId}
                        </h4>
                        <span className="text-sm text-primary-600 dark:text-primary-400">
                          {similarCase.similarity}% match
                        </span>
                      </div>
                      <div>
                        <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-1">
                          Key Similarity Factors:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {similarCase.keyFactors.map((factor, i) => (
                            <span key={i} className="text-xs bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-300 px-2 py-1 rounded-full">
                              {factor}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIAnalysisPage;