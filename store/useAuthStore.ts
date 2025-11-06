// useAuthStore.ts
import { create } from "zustand";
import { devtools } from "zustand/middleware";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { auth } from "../services/firebaseConfig";

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  initAuthListener: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools((set) => ({
    user: null,
    loading: false,
    error: null,

    login: async (email: string, password: string) => {
      set({ loading: true, error: null });
      try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        set({ user: res.user });
      } catch (error: any) {
        set({ error: error.message });
      } finally {
        set({ loading: false });
      }
    },

    signup: async (email: string, password: string) => {
      set({ loading: true, error: null });
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        set({ user: res.user });
      } catch (error: any) {
        set({ error: error.message });
      } finally {
        set({ loading: false });
      }
    },

    logout: async () => {
      set({ loading: true, error: null });
      try {
        await signOut(auth);
        set({ user: null });
      } catch (error: any) {
        set({ error: error.message });
      } finally {
        set({ loading: false });
      }
    },

    initAuthListener: () => {
      onAuthStateChanged(auth, (user) => {
        set({ user });
      });
    },
  }))
);
