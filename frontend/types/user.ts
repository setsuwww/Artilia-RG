export interface User {
    id: number;
    email: string;
    role: string;
    created_at: string;
}

export interface AuthResponse {
    access_token: string;
    token_type: string;
}
