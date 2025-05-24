import React, { createContext, useContext, useState, useEffect } from 'react';

interface BlockchainContextType {
  isConnected: boolean;
  isConnecting: boolean;
  blockchainError: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  verifyRecord: (recordId: string) => Promise<boolean>;
  walletAddress: string | null;
  chainId: string | null;
}

const BlockchainContext = createContext<BlockchainContextType | undefined>(undefined);

export const useBlockchain = () => {
  const context = useContext(BlockchainContext);
  if (!context) {
    throw new Error('useBlockchain must be used within a BlockchainProvider');
  }
  return context;
};

export const BlockchainProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [blockchainError, setBlockchainError] = useState<string | null>(null);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [chainId, setChainId] = useState<string | null>(null);

  useEffect(() => {
    // Check if wallet was previously connected
    const checkConnection = async () => {
      try {
        // This would be replaced with actual blockchain connection check
        const savedAddress = localStorage.getItem('walletAddress');
        if (savedAddress) {
          setWalletAddress(savedAddress);
          setChainId('0x38'); // BNB Smart Chain
          setIsConnected(true);
        }
      } catch (error) {
        console.error('Blockchain connection check failed:', error);
        setBlockchainError('Failed to reconnect to blockchain');
      }
    };

    checkConnection();
  }, []);

  const connectWallet = async () => {
    setIsConnecting(true);
    setBlockchainError(null);
    
    try {
      // This would be replaced with actual wallet connection logic
      // For BNB Smart Chain using libraries like ethers.js or web3.js
      
      // Mock connection for demonstration
      const mockAddress = '0x' + Math.random().toString(16).slice(2, 42);
      
      setWalletAddress(mockAddress);
      setChainId('0x38'); // BNB Smart Chain
      setIsConnected(true);
      
      localStorage.setItem('walletAddress', mockAddress);
    } catch (error) {
      console.error('Wallet connection failed:', error);
      setBlockchainError('Failed to connect wallet');
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    localStorage.removeItem('walletAddress');
    setWalletAddress(null);
    setChainId(null);
    setIsConnected(false);
  };

  const verifyRecord = async (recordId: string): Promise<boolean> => {
    try {
      // This would be replaced with actual blockchain verification
      // by calling a smart contract function
      
      // Mock verification for demonstration
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate blockchain call
      
      // For demo purposes, all records are considered verified
      return true;
    } catch (error) {
      console.error('Record verification failed:', error);
      return false;
    }
  };

  return (
    <BlockchainContext.Provider value={{
      isConnected,
      isConnecting,
      blockchainError,
      connectWallet,
      disconnectWallet,
      verifyRecord,
      walletAddress,
      chainId
    }}>
      {children}
    </BlockchainContext.Provider>
  );
};