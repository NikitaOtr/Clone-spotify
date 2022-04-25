import { api } from './api';
import { EnumOfSearchTypes, IRelease, ITrack } from '../types/commonTypes';

export interface IServerCollectionItems<T = IRelease> {
    items: Array<T>
}

export interface ISearchData {
    albums: IServerCollectionItems
    artists: IServerCollectionItems
    playlists: IServerCollectionItems
    tracks: IServerCollectionItems<ITrack>
}

export const apiSearch = {
    getAll(searchText: string) {
        return api.get<ISearchData>(`search?type=album,artist,playlist,track&q=${searchText}&limit=10`)
            .then(response => ({
                albums: {
                    id: searchText,
                    type: EnumOfSearchTypes.albums,
                    items: response.data.albums.items,
                },

                artists: {
                    id: searchText,
                    type: EnumOfSearchTypes.artists,
                    items: response.data.artists.items,
                },

                playlists: {
                    id: searchText,
                    type: EnumOfSearchTypes.playlists,
                    items: response.data.playlists.items,
                },

                tracks: response.data.tracks.items,
            }));
    },

    getPlaylists(searchText: string, limit = 50) {
        return api.get<ISearchData>(`search?type=playlist&q=${searchText}&limit=${limit}`)
            .then(response => ({
                id: searchText,
                type: EnumOfSearchTypes.playlists,
                items: response.data.playlists.items,
            }));
    },

    getAlbums(searchText: string, limit = 50) {
        return api.get<ISearchData>(`search?type=album&q=${searchText}&limit=${limit}`)
            .then(response => ({
                id: searchText,
                type: EnumOfSearchTypes.albums,
                items: response.data.albums.items,
            }));
    },
    getArtists(searchText: string, limit = 50) {
        return api.get<ISearchData>(`search?type=artist&q=${searchText}&limit=${limit}`)
            .then(response => ({
                id: searchText,
                type: EnumOfSearchTypes.artists,
                items: response.data.artists.items,
            }));
    },
};