import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'court' | 'police' | 'company' | 'admin' | null;

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  verified: boolean;
  organization: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  hasPermission: (requiredRole: UserRole) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check if user is already logged in
    const checkAuthStatus = async () => {
      try {
        // This would be replaced with actual blockchain wallet connection
        // or JWT token verification against your backend
        const storedUser = localStorage.getItem('user');
        
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // This would be replaced with actual authentication logic
      // connecting to your BNB Smart Chain backend
      
      // Mock login for demonstration
      const mockUsers: Record<string, User> = {
        'court@example.com': {
          id: '1',
          name: 'Judge Smith',
          email: 'court@example.com',
          role: 'court',
          verified: true,
          organization: 'Supreme Court'
        },
        'police@example.com': {
          id: '2',
          name: 'Chief Johnson',
          email: 'police@example.com',
          role: 'police',
          verified: true,
          organization: 'Metropolitan Police'
        },
        'company@example.com': {
          id: '3',
          name: 'HR Director Davis',
          email: 'company@example.com',
          role: 'company',
          verified: true,
          organization: 'ABC Corporation'
        },
        'admin@example.com': {
          id: '4',
          name: 'System Admin',
          email: 'admin@example.com',
          role: 'admin',
          verified: true,
          organization: 'System Administration'
        }
      };

      const user = mockUsers[email];
      
      if (user && password === 'password') {
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const hasPermission = (requiredRole: UserRole) => {
    if (!user) return false;
    
    if (user.role === 'admin') return true; // Admin has access to everything
    
    return user.role === requiredRole;
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      isLoading,
      login,
      logout,
      hasPermission
    }}>
      {children}
    </AuthContext.Provider>
  );
};