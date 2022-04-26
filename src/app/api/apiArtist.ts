import { EnumOfPlaylistTypes, EnumOfSearchTypes, IRelease } from '../types/commonTypes';
import { api } from './api';
import { IServerCollectionItems } from './apiSearch';
import { ITrack } from './../types/commonTypes';

interface ITracks {
    tracks: Array<ITrack>
}

interface IArtists {
    artists: Array<IRelease>
}

export const apiArtist =  {
    getArtist(id: string) {
        return api.get<IRelease>(`artists/${id}`)
            .then(response => response.data);
    },

    getArtistAlbums(id: string) {
        return api.get<IServerCollectionItems>(`artists/${id}/albums`)
            .then(response => ({
                id,
                type: EnumOfSearchTypes.albums,
                items: response.data.items,
            }));
    },

    getArtistTopTrack(id: string) {
        return api.get<ITracks>(`artists/${id}/top-tracks?market=ES`)
            .then(response => ({
                type: EnumOfPlaylistTypes.playlist,
                items: response.data.tracks,
            }));
    },

    getRelatedArtists(id: string) {
        return api.get<IArtists>(`artists/${id}/related-artists`)
            .then(response => ({
                id,
                type: EnumOfSearchTypes.artists,
                items: response.data.artists,
            }));
    },
};