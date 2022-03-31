import axios from 'axios';
import qs from 'qs';

export const tokenInstance = {
    token: null as null | string,
    async getToken() {
        const clientId = '74ad96b2c9074c758e222dd191d1a0b4';
        const clientSecret = 'acc20d172d9746c99ab05f0115d51fc6';
        const TOKEN_URL = 'https://accounts.spotify.com/api/token';
        const body = qs.stringify({ 'grant_type': 'client_credentials' });
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
        };
        try {
            const response = await axios.post<{access_token: string}>(TOKEN_URL, body, config);
            console.log(response.data.access_token);
            this.token = response.data.access_token;
        } catch(e) {
            console.log(e);
        }
    },
};
