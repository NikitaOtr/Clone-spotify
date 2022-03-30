import { tokenInstance } from './tokenInstance';
import { IArtist } from './../store/Reducers/searchReducer';

export const search = async (text: string) => {
    console.log(tokenInstance.token);
    return tokenInstance.instanceAxios
        .get<{artists: {items: Array<IArtist>}}>(`search?type=artist,album,playlist,track,show,episode&q=${text}`)
        .then(response => {
            console.log(response.status);
            return response.data;
        });
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