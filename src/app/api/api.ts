import { tokenInstance } from './tokenInstance';
import axios, { AxiosRequestConfig } from 'axios';

export const api = axios.create({
    baseURL: 'https://api.spotify.com/v1/'
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
    config.headers = {
        'Authorization': `Bearer ${tokenInstance.token}`
    };
    return config;
});

export enum StatusEnum {
    Loading,
    Success,
    Error,
}