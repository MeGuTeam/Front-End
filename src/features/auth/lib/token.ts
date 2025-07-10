import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export const TOKEN_KEY = 'token';

type JwtPayload = {
  exp: number;
  id?: string;
  userId?: string;
  sub?: string;
};

export function setToken(token: string) {
  Cookies.set(TOKEN_KEY, token, {
    expires: 0.5,
    sameSite: 'Lax',
    secure: true,
  });
}

export function getToken(): string | undefined {
  return Cookies.get(TOKEN_KEY);
}

export function removeToken() {
  Cookies.remove(TOKEN_KEY);
}

export function isTokenExpired(token: string): boolean {
  try {
    const decoded = jwtDecode<JwtPayload>(token);
    console.log(token);
    console.log(decoded);
    const now = Date.now() / 1000; // in seconds
    return decoded.exp < now;
  } catch (e) {
    console.error(e);
    return true;
  }
}

// Fungsi untuk menyimpan user ID
export function setUserId(id: string) {
  localStorage.setItem('userId', id);
}

export function getUserId(): string | null {
  return localStorage.getItem('userId');
}

export function removeUserId() {
  localStorage.removeItem('userId');
}
