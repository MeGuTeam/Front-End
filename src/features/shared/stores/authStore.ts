// TODO: Migrasi ke Global State setelah selesai mvp feature

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  id: string | null;
  username: string | null;
  profilePicture: string | null;
  token: string | null;

  setAuth: (data: {
    id: string;
    username: string;
    profile_picture: string;
    token: string;
  }) => void;
  clearAuth: () => void;
}

export const userAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      id: null,
      username: null,
      profilePicture: null,
      token: null,

      setAuth: ({ id, username, profile_picture, token }) =>
        set({
          id,
          username,
          profilePicture: profile_picture,
          token,
        }),

      clearAuth: () =>
        set({
          id: null,
          username: null,
          profilePicture: null,
          token: null,
        }),
    }),
    {
      name: 'auth-data',
      partialize: (state) => ({
        id: state.id,
        username: state.username,
        profilePicture: state.profilePicture,
      }),
    }
  )
);
