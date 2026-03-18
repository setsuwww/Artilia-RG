import { api } from "./api";
import { User } from "../types/user";

class UserService {
    async getAll(): Promise<User[]> {
        const res = await api.get<User[]>("/users");
        return res.data;
    }

    async getById(id: number): Promise<User> {
        const res = await api.get<User>(`/users/${id}`);
        return res.data;
    }

    async update(id: number, data: Partial<User>): Promise<User> {
        const res = await api.put<User>(`/users/${id}`, data);
        return res.data;
    }

    async delete(id: number): Promise<{ msg: string }> {
        const res = await api.delete(`/users/${id}`);
        return res.data;
    }
}

export const userService = new UserService();
