const clientId = '74ad96b2c9074c758e222dd191d1a0b4';
const clientSecret = '136d31956b50474e8cb7124e1ad8f971';

export const tokenInstance = {
    token: null as null | string,

    async getToken() {
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });
        const data = await response.json();
        this.token = data.access_token;
        console.log(this.token);
    },
};