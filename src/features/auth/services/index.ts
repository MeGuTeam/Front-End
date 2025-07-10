import api from '../../shared/lib/axios';
import {
  setToken,
  getToken,
  removeToken,
  isTokenExpired,
  setUserId,
  removeUserId,
  getUserId,
} from '../lib/token';

export async function loginAuth(username: string, password: string) {
  try {
    const res = await api.post('/auth/login', { username, password });
    console.log('Login register: ', res);

    const token = res.data.data.token;
    const userId = res.data.data.id;

    setToken(token);
    setUserId(userId);

    return res;
  } catch (error) {
    console.error('Proses Login Anda Gagal: ', error);
    throw error;
  }
}

export async function registerAuth(username: string, password: string) {
  try {
    const res = await api.post('/auth/register', { username, password });
    console.log('Register Berhasil: ', res);
    return res;
  } catch (error) {
    console.error('Proses regist Anda Gagal', error);
  }
}

export async function getUser() {
  try {
    const token = getToken();
    const userId = getUserId();

    if (!token) {
      throw new Error('Token tidak ditemukan');
    }

    if (!userId) {
      throw new Error('User ID tidak ditemukan');
    }

    if (isTokenExpired(token)) {
      removeToken();
      removeUserId();
      throw new Error('Token expired');
    }

    console.log('User ID:', userId);

    const res = await api.get(`/profile/${userId}`);

    return res.data;
  } catch (error) {
    console.error('Gagal mengambil data user: ', error);
    throw error;
  }
}

export function logout() {
  removeToken();
  removeUserId();
}
