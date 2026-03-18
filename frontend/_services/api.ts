import axios, { AxiosInstance } from "axios";

class Api {
    private instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            baseURL: "http://127.0.0.1:8000",
            headers: {
                "Content-Type": "application/json",
            },
        });

        this.instance.interceptors.request.use((config) => {
            const token = localStorage.getItem("token");

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }

            return config;
        });
    }

    get client() {
        return this.instance;
    }
}

export const api = new Api().client;
