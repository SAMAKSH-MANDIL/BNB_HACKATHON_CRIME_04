export type CrimeSeverity = 'minor' | 'moderate' | 'major' | 'severe';

export type RecordStatus = 'active' | 'closed' | 'expunged' | 'appealed';

export interface CriminalRecord {
  id: string;
  caseNumber: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  nationalId: string;
  dateOfOffense: string;
  dateOfConviction: string;
  offenseType: string;
  offenseDescription: string;
  sentence: string;
  court: string;
  status: RecordStatus;
  aiClassification?: {
    severity: CrimeSeverity;
    riskScore: number;
    recommendedAction?: string;
    patterns?: string[];
  };
  blockchainData: {
    txHash: string;
    blockNumber: number;
    timestamp: number;
    verified: boolean;
  };
  attachments?: {
    id: string;
    name: string;
    type: string;
    hash: string;
  }[];
  accessLog: {
    userId: string;
    userName: string;
    organization: string;
    timestamp: number;
    purpose: string;
  }[];
}

export interface SearchFilters {
  name?: string;
  nationalId?: string;
  dateOfBirthFrom?: string;
  dateOfBirthTo?: string;
  offenseType?: string;
  courtName?: string;
  dateOfOffenseFrom?: string;
  dateOfOffenseTo?: string;
  status?: RecordStatus;
  severity?: CrimeSeverity;
}

export interface AiAnalysisResult {
  recordId: string;
  severityScore: number;
  recidivismRisk: number;
  detectedPatterns: string[];
  similarCases: {
    caseId: string;
    similarity: number;
    keyFactors: string[];
  }[];
  recommendedActions: string[];
  timestamp: number;
}

export interface VerificationRequest {
  id: string;
  company: {
    id: string;
    name: string;
    contactPerson: string;
    email: string;
    verified: boolean;
  };
  subject: {
    nationalId: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
  };
  purpose: string;
  consentProof: string;
  status: 'pending' | 'approved' | 'rejected';
  requestDate: number;
  responseDate?: number;
  respondedBy?: string;
}