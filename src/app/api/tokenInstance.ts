import axios from 'axios';

const clientId = '74ad96b2c9074c758e222dd191d1a0b4';
const clientSecret = '62a4611aefc84095bd35292cb7416229';

export const tokenInstance = {
    token: null as null | string,
    instanceAxios: axios.create({
        baseURL: 'https://api.spotify.com/v1/',
        headers: { 'Authorization': 'Bearer 132313' }
    }),

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
        console.log(data);
        console.log(this.token);
        this.createInstanceAxios();
    },

    createInstanceAxios() {
        this.instanceAxios = axios.create({
            baseURL: 'https://api.spotify.com/v1/',
            headers: { 'Authorization': 'Bearer ' + tokenInstance.token }
        });
    },
};
