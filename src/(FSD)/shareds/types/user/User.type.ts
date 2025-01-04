export interface UserType {
    password: string;
    email: string;
    userId?: number;
    name?: string;
    exp?: number;
    iat?: number;
    roles?: string[];
    address?: string;
    phoneNumber?: string;
};