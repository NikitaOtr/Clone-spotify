import axios from 'axios';
import qs from 'qs';

function generateString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters[Math.floor(Math.random() * (charactersLength + 1))];
    }
    return result;
}

export const tokenInstance = {
    clientId: '74ad96b2c9074c758e222dd191d1a0b4',
    token: null as null | string,

    async getToken() {
        const clientSecret = '581c7ca90a2e422c84fc9f9a689287d2';
        const TOKEN_URL = 'https://accounts.spotify.com/api/token';
        const body = qs.stringify({ 'grant_type': 'client_credentials' });
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(this.clientId + ':' + clientSecret)
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

export const userToken = {
    accessToken: null as string | null,
    refreshToken: null as string | null,
    code: null as string | null,
    authEndPoint: 'https://accounts.spotify.com/authorize',
    RedirectUrl: 'http://localhost:3000',
    Response_Type: 'code',
    scope: 'ugc-image-upload user-read-playback-state user-modify-playback-state user-read-private ' +
        'user-follow-modify user-follow-read user-library-modify user-library-read streaming ' +
        'user-read-playback-position playlist-modify-private playlist-read-collaborative ' +
        'app-remote-control user-read-email playlist-read-private user-top-read ' +
        'playlist-modify-public user-read-currently-playing user-read-recently-played',
    state: generateString(16),

    getLink(): string {
        return `${this.authEndPoint}?client_id=${tokenInstance.clientId}` +
            `&state=${this.state}` +
            `&scope=${this.scope}` +
            `&redirect_uri=${this.RedirectUrl}` +
            `&response_type=${this.Response_Type}` +
            `&show_dialog=true`;
    },

    async getToken() {
        const clientId = '74ad96b2c9074c758e222dd191d1a0b4';
        const RedirectUrl =  'http://localhost:3000';
        const clientSecret = '22ef58f7e2804605ba6c7e622d2059d6';
        const TOKEN_URL = 'https://accounts.spotify.com/api/token';
        const body = qs.stringify({
            'grant_type': 'authorization_code',
            'code': this.code,
            'redirect_uri': RedirectUrl
        });
        const config = {
            headers: {
                'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
        };
        try {
            const response = await axios.post<{ access_token: string, refresh_token: string }>(TOKEN_URL, body, config);
            console.log(response.data);
            this.accessToken = response.data.access_token;
            this.refreshToken = response.data.refresh_token;
        } catch(e) {
            console.log(e);
        }
    },
};