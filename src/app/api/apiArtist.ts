import { ISearchItem } from '../types/typeSearch';
import { api } from './api';
import { IServerCollectionItems } from './apiSearch';
import { ITrack } from './../types/typeSearch';

interface testTrack {
    tracks: Array<ITrack>
}

interface testArtists {
    artists: Array<ISearchItem>
}

export const apiArtist =  {
    getArtist(id: string) {
        return api.get<ISearchItem>(`artists/${id}`)
            .then(response => {
                console.log(response.data);
                return response.data;
            });
    },

    getArtistAlbums(id: string) {
        return api.get<IServerCollectionItems>(`artists/${id}/albums`)
            .then(response => {
                console.log(response.data);
                return response.data.items;
            });
    },

    getArtistTopTrack(id: string) {
        return api.get<testTrack>(`artists/${id}/top-tracks?market=ES`)
            .then(response => {
                console.log(response.data);
                return response.data.tracks;
            });
    },

    getRelatedArtists(id: string) {
        return api.get<testArtists>(`artists/${id}/related-artists`)
            .then(response => {
                console.log(response.data);
                return response.data.artists;
            });

    }
};