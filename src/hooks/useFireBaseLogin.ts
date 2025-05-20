/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  type User,
} from "firebase/auth";
import { app } from "../../firebase"; // Make sure you have initialized Firebase in this file

type AuthResult = {
  login: (email: string, password: string) => Promise<AuthResponse>;
  register: (email: string, password: string) => Promise<AuthResponse>;
};

export function useFirebaseAuth(): AuthResult {
  const auth = getAuth(app);

  const login = async (email: string, password: string) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return {
        status: 200,
        response: result.user,
      };
    } catch (err: any) {
      console.error("Login error:", err);
      return {
        status: 500,
        response: err,
        error: err.message,
      };
    }
  };

  const register = async (email: string, password: string) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return {
        status: 200,
        response: result.user,
      };
    } catch (err: any) {
      console.error("Registration error:", err);
      return {
        status: 500,
        response: err.message,
      };
    }
  };

  return { login, register };
}

export type AuthResponse = {
  status: number;
  response: User | string;
  error?: string;
};
