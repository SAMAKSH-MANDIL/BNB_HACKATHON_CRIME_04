import { CriminalRecord, AiAnalysisResult, VerificationRequest } from '../types/record.types';

export const mockCriminalRecords: CriminalRecord[] = [
  {
    id: '1',
    caseNumber: 'CR-2023-12345',
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '1985-05-15',
    nationalId: 'AB123456C',
    dateOfOffense: '2023-01-15',
    dateOfConviction: '2023-03-20',
    offenseType: 'Theft',
    offenseDescription: 'Shoplifting merchandise valued at $150 from a retail store.',
    sentence: '6 months probation, 40 hours community service',
    court: 'Central District Court',
    status: 'active',
    aiClassification: {
      severity: 'minor',
      riskScore: 25,
      recommendedAction: 'Regular probation check-ins',
      patterns: ['First-time offender', 'Non-violent']
    },
    blockchainData: {
      txHash: '0x8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b',
      blockNumber: 8756142,
      timestamp: 1674152400,
      verified: true
    },
    attachments: [
      {
        id: 'att1',
        name: 'Court Order',
        type: 'application/pdf',
        hash: '0x7d5a99f603f231d53a4f39d1521f98d2e8bb279cf29bedec1857d1f24ed15aaa'
      }
    ],
    accessLog: [
      {
        userId: '2',
        userName: 'Chief Johnson',
        organization: 'Metropolitan Police',
        timestamp: 1684152400,
        purpose: 'Routine check'
      }
    ]
  },
  {
    id: '2',
    caseNumber: 'CR-2022-98765',
    firstName: 'Jane',
    lastName: 'Smith',
    dateOfBirth: '1992-08-23',
    nationalId: 'CD987654A',
    dateOfOffense: '2022-11-05',
    dateOfConviction: '2023-02-10',
    offenseType: 'Fraud',
    offenseDescription: 'Credit card fraud involving multiple unauthorized transactions.',
    sentence: '18 months probation, $5,000 fine, restitution',
    court: 'Financial Crimes Court',
    status: 'active',
    aiClassification: {
      severity: 'moderate',
      riskScore: 48,
      recommendedAction: 'Financial monitoring, bi-weekly check-ins',
      patterns: ['Planned action', 'Financial motivation']
    },
    blockchainData: {
      txHash: '0x9c2e3b55e8df9a4a38be3225bd5eb8b3f527f619cff9d6e430e3e66ecd14bf5f',
      blockNumber: 8546921,
      timestamp: 1668546600,
      verified: true
    },
    attachments: [
      {
        id: 'att2',
        name: 'Financial Records',
        type: 'application/pdf',
        hash: '0x3a42a5c6e6fa749cfe2b966f4ac9898dce5e3d5183f8a4a34b1c6e0a4e8b2f5d'
      }
    ],
    accessLog: [
      {
        userId: '1',
        userName: 'Judge Smith',
        organization: 'Supreme Court',
        timestamp: 1674152400,
        purpose: 'Case review'
      },
      {
        userId: '3',
        userName: 'HR Director Davis',
        organization: 'ABC Corporation',
        timestamp: 1682152400,
        purpose: 'Employment verification'
      }
    ]
  },
  {
    id: '3',
    caseNumber: 'CR-2021-45678',
    firstName: 'Robert',
    lastName: 'Johnson',
    dateOfBirth: '1975-12-03',
    nationalId: 'EF456789D',
    dateOfOffense: '2021-06-12',
    dateOfConviction: '2021-09-30',
    offenseType: 'Assault',
    offenseDescription: 'Physical altercation resulting in minor injuries to the victim.',
    sentence: '12 months imprisonment, anger management program',
    court: 'Criminal Court',
    status: 'closed',
    aiClassification: {
      severity: 'major',
      riskScore: 72,
      recommendedAction: 'Continued monitoring after release, rehabilitation program',
      patterns: ['Impulsive behavior', 'History of conflicts']
    },
    blockchainData: {
      txHash: '0x1d2e3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f',
      blockNumber: 7896542,
      timestamp: 1623501600,
      verified: true
    },
    attachments: [
      {
        id: 'att3',
        name: 'Medical Report',
        type: 'application/pdf',
        hash: '0xf1e2d3c4b5a6987654321fedcba0987654321fedcba09876543210fedcba9876'
      }
    ],
    accessLog: [
      {
        userId: '2',
        userName: 'Chief Johnson',
        organization: 'Metropolitan Police',
        timestamp: 1633046400,
        purpose: 'Case investigation'
      }
    ]
  },
  {
    id: '4',
    caseNumber: 'CR-2020-24680',
    firstName: 'Michael',
    lastName: 'Williams',
    dateOfBirth: '1988-04-17',
    nationalId: 'GH234567E',
    dateOfOffense: '2020-03-25',
    dateOfConviction: '2020-08-15',
    offenseType: 'Drug Possession',
    offenseDescription: 'Possession of controlled substances for personal use.',
    sentence: '2 years probation, drug rehabilitation program',
    court: 'District Court',
    status: 'active',
    aiClassification: {
      severity: 'moderate',
      riskScore: 45,
      recommendedAction: 'Regular drug testing, continued rehabilitation',
      patterns: ['Substance dependency', 'No distribution intent']
    },
    blockchainData: {
      txHash: '0xa1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
      blockNumber: 7453210,
      timestamp: 1585094400,
      verified: true
    },
    accessLog: [
      {
        userId: '2',
        userName: 'Chief Johnson',
        organization: 'Metropolitan Police',
        timestamp: 1630046400,
        purpose: 'Probation compliance check'
      }
    ]
  },
  {
    id: '5',
    caseNumber: 'CR-2023-13579',
    firstName: 'Sarah',
    lastName: 'Brown',
    dateOfBirth: '1995-11-30',
    nationalId: 'IJ345678F',
    dateOfOffense: '2023-02-18',
    dateOfConviction: '2023-05-25',
    offenseType: 'Cybercrime',
    offenseDescription: 'Unauthorized access to computer systems and data theft.',
    sentence: '3 years probation, $10,000 fine, restricted computer access',
    court: 'Federal Cyber Crimes Court',
    status: 'active',
    aiClassification: {
      severity: 'major',
      riskScore: 68,
      recommendedAction: 'Monitoring of digital activities, specialized rehabilitation',
      patterns: ['Technical sophistication', 'Planned execution']
    },
    blockchainData: {
      txHash: '0xd1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e',
      blockNumber: 8832145,
      timestamp: 1676678400,
      verified: true
    },
    attachments: [
      {
        id: 'att4',
        name: 'Digital Evidence Report',
        type: 'application/pdf',
        hash: '0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef'
      }
    ],
    accessLog: [
      {
        userId: '1',
        userName: 'Judge Smith',
        organization: 'Supreme Court',
        timestamp: 1684152400,
        purpose: 'Sentencing review'
      }
    ]
  }
];

export const mockAiAnalysisResults: AiAnalysisResult[] = [
  {
    recordId: '1',
    severityScore: 25,
    recidivismRisk: 18,
    detectedPatterns: ['First-time offender', 'Non-violent', 'Economic motivation'],
    similarCases: [
      {
        caseId: 'CR-2022-11223',
        similarity: 85,
        keyFactors: ['Similar age group', 'Theft under $500', 'No prior record']
      },
      {
        caseId: 'CR-2021-33445',
        similarity: 72,
        keyFactors: ['Retail theft', 'Voluntary surrender', 'Cooperative with authorities']
      }
    ],
    recommendedActions: [
      'Standard probation monitoring',
      'Community service completion verification',
      'Financial counseling recommended'
    ],
    timestamp: 1674238800
  },
  {
    recordId: '2',
    severityScore: 48,
    recidivismRisk: 42,
    detectedPatterns: ['Planned action', 'Financial motivation', 'Multiple transactions'],
    similarCases: [
      {
        caseId: 'CR-2022-22334',
        similarity: 91,
        keyFactors: ['Credit card fraud', 'Multiple victims', 'Sophisticated method']
      },
      {
        caseId: 'CR-2021-44556',
        similarity: 78,
        keyFactors: ['Financial fraud', 'Similar monetary amount', 'Digital evidence']
      }
    ],
    recommendedActions: [
      'Financial activity monitoring',
      'Restitution payment tracking',
      'Fraud prevention education'
    ],
    timestamp: 1668633000
  },
  {
    recordId: '3',
    severityScore: 72,
    recidivismRisk: 65,
    detectedPatterns: ['Impulsive behavior', 'History of conflicts', 'Alcohol involved'],
    similarCases: [
      {
        caseId: 'CR-2020-55667',
        similarity: 88,
        keyFactors: ['Similar assault pattern', 'Public location', 'Prior warnings']
      },
      {
        caseId: 'CR-2019-77889',
        similarity: 75,
        keyFactors: ['Assault with minor injuries', 'Impulse control issues', 'History of altercations']
      }
    ],
    recommendedActions: [
      'Anger management program completion verification',
      'Substance abuse assessment',
      'Victim protection measures',
      'Regular check-ins after release'
    ],
    timestamp: 1623588000
  }
];

export const mockVerificationRequests: VerificationRequest[] = [
  {
    id: '1',
    company: {
      id: 'comp1',
      name: 'ABC Corporation',
      contactPerson: 'HR Director Davis',
      email: 'hr@abccorp.com',
      verified: true
    },
    subject: {
      nationalId: 'AB123456C',
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '1985-05-15'
    },
    purpose: 'Employment background check for senior financial position',
    consentProof: '0x8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b',
    status: 'approved',
    requestDate: 1682065200,
    responseDate: 1682151600,
    respondedBy: 'System Admin'
  },
  {
    id: '2',
    company: {
      id: 'comp2',
      name: 'XYZ Industries',
      contactPerson: 'Security Manager Wilson',
      email: 'security@xyzind.com',
      verified: true
    },
    subject: {
      nationalId: 'CD987654A',
      firstName: 'Jane',
      lastName: 'Smith',
      dateOfBirth: '1992-08-23'
    },
    purpose: 'Security clearance for government contract work',
    consentProof: '0x9c2e3b55e8df9a4a38be3225bd5eb8b3f527f619cff9d6e430e3e66ecd14bf5f',
    status: 'pending',
    requestDate: 1684065200
  },
  {
    id: '3',
    company: {
      id: 'comp3',
      name: 'Global Services Inc',
      contactPerson: 'Compliance Officer Zhang',
      email: 'compliance@globalserv.com',
      verified: true
    },
    subject: {
      nationalId: 'EF456789D',
      firstName: 'Robert',
      lastName: 'Johnson',
      dateOfBirth: '1975-12-03'
    },
    purpose: 'Visa application background check for international assignment',
    consentProof: '0x1d2e3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f',
    status: 'rejected',
    requestDate: 1680065200,
    responseDate: 1680151600,
    respondedBy: 'Judge Smith'
  }
];