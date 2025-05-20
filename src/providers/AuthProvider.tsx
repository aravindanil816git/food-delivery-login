import { createContext, useContext, useState, type ReactNode } from "react";
import { useFirebaseAuth } from "../hooks/useFireBaseLogin"; // <-- Import your Firebase hook


// Define the AuthContextType interface
interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  register: (email: string, password: string) => void;
  loading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { login: firebaseLogin, register: firebaseRegister } = useFirebaseAuth();


  const login =  async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    const result =  await firebaseLogin(email, password);

    if(result.status === 200) {
      setIsAuthenticated(true);
    } else if(result.status === 500 && result.error) {
      setError(result.error);
    }
    setLoading(false);
  };

  const register =  async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    const result =  await firebaseRegister(email, password);
    if(result) {
      setIsAuthenticated(true);
    }else {
      setError("Invalid email or password");
    }
    setLoading(false);
  };


  return (
    <AuthContext.Provider value={{ isAuthenticated, login, register, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};