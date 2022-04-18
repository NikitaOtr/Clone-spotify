import { api } from './api';
import { ISearchItem, ITrack } from '../types/typeSearch';

export interface IServerCollectionItems<T = ISearchItem> {
    items: Array<T>
}

export interface ISearchData {
    albums: IServerCollectionItems
    artists: IServerCollectionItems
    playlists: IServerCollectionItems
    tracks: IServerCollectionItems<ITrack>
}

export const apiSearch = {
    getAll(text: string) {
        return api.get<ISearchData>(`search?type=album,artist,playlist,track&q=${text}&limit=10`)
            .then(response => response.data);
    },

    getPlaylists(searchText: string) {
        return api.get<ISearchData>(`search?type=playlist&q=${searchText}&limit=50`)
            .then(response => response.data.playlists);
    },

    getAlbums(searchText: string) {
        return api.get<ISearchData>(`search?type=album&q=${searchText}&limit=50`)
            .then(response => response.data.albums);
    },
    getArtists(searchText: string) {
        return api.get<ISearchData>(`search?type=artist&q=${searchText}&limit=50`)
            .then(response => response.data.artists);
    },
};