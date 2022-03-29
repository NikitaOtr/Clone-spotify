import axios from 'axios';
import { tokenInstance } from './tokenInstance';

export const instance = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
    headers: {
        'Authorization': 'Bearer ' + tokenInstance.token,
    },
});

export const search = async (text: string) => {
    const result = await instance.get('search?type=artist&q=' + text);
    const data = await result.data;
    console.log(data);
    return data;
};

// const api = {
//     token: null,
//     authEndPoint: 'https://accounts.spotify.com/authorize',
//     RedirectUrl: 'http://localhost:3000',
//     Response_Type: 'token',
//     scope: 'user-read-private user-read-email',

//     getLink(): string {
//         return `${this.authEndPoint}?client_id=${clientId}` +
//             `&scope=${this.scope}` +
//             `&redirect_uri=${this.RedirectUrl}` +
//             `&response_type=${this.Response_Type}`;
//     },
// };

// const test2 = async () => {
//     if (api.token) {
//         const result = await fetch('https://api.spotify.com/v1/browse/new-releases', {
//             method: 'GET',
//             headers: {
//                 'Authorization': 'Bearer ' + api.token,
//             }
//         });
//         const data = await result.json();
//         console.log(data);
//     }
// };