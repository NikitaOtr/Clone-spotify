import { tokenInstance } from './tokenInstance';
import axios, { AxiosRequestConfig } from 'axios';

export const api = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
});

api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        config.headers = {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        };
        return config;
    },
);

api.interceptors.response.use(
    (config: AxiosRequestConfig) => config,
    async error => {
        const originalRequest = error.config;
        if (error.response.status === 401 && originalRequest && !originalRequest._isRetry) {
            originalRequest._isRetry = true;
            await tokenInstance.getToken();
            return api.request(originalRequest);
        }
        throw error;
    },
);
