import api from "../lib/axios";
import { getToken, isTokenExpired, removeToken } from "@/features/auth/lib/token";

export const getAvatar = async () => {
    try {
        const res = await api.get("/avatar");
        console.log("Respon", res);
        return res
    } catch (e) {
        console.error("Gagal mengambil data");
    }
}

export async function getUser(id: number) {
    try {
        const token = getToken();

        if (!token) {
            throw new Error("Token tidak ditemukan");
        }

        if (isTokenExpired(token)) {
            removeToken();
            throw new Error("Token expired");
        }

        const res = await api.get(`/profile/${id}`);
        return res.data;
    } catch (e) {
        console.error("Gagal mengambil data user: ", e);
    }
}

export const postAvatar = async () => {
    try {
        const res = await api.post("/upload/avatar", {

        });
        console.log("Respon", res);
        return res
    } catch (e) {
        console.error("Gagal mengambil data");
    }
} 