import { api } from './api';
import { ITrack, IImage, ISearchItem } from './../types/typeSearch';

export interface TestAlbum {
    id: string,
    name: string,
    images: Array<IImage>,
    artists: Array<ISearchItem>,
    release_data: string,
    total_tracks: number,
    tracks: {
        items: Array<ITrack>,
    }
}

export interface TestPlayList {
    id: string,
    name: string,
    images: Array<IImage>,
    artists: Array<ISearchItem>,
    release_data: string,
    total_tracks: number,
    tracks: {
        items: Array<{track : ITrack}>
    }
}

export const apiPlayList = {
    getAlbum(id: string) {
        return api.get<TestAlbum>(`albums/${id}`)
            .then(response => response.data);
    },
    getPlayList(id: string) {
        return api.get<TestPlayList>(`playlists/${id}`)
            .then(response => response.data);
    }
};
