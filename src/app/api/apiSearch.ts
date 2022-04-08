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
    searchAll(text: string) {
        return api.get<ISearchData>(`search?type=album,artist,playlist,track&q=${text}&limit=10`)
            .then(response => {
                console.log(response.data);
                return response.data;
            });
    },
    searchForType(type: string, searchText: string) {
        return api.get<ISearchData>(`search?type=${type}&q=${searchText}&limit=50`)
            .then(response => {
                console.log(response.data);
                return response.data;
            });
    },
};

export const Album = {
    getAlbum(id: string) {
        return api.get(`albums/${id}`)
            .then(response => response.data);
    }
};
