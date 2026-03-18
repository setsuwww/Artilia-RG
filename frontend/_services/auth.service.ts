import { api } from "./api";
import { AuthResponse, User } from "@/types/user";

class AuthService {
    async register(email: string, password: string): Promise<User> {
        const res = await api.post<User>("/register", {
            email,
            password,
        });

        return res.data;
    }

    async login(email: string, password: string): Promise<AuthResponse> {
        const res = await api.post<AuthResponse>("/login", {
            email,
            password,
        });

        const data = res.data;

        localStorage.setItem("token", data.access_token);

        return data;
    }

    async me(): Promise<User> {
        const res = await api.get<User>("/me");
        return res.data;
    }

    logout() {
        localStorage.removeItem("token");
    }
}

export const authService = new AuthService();
