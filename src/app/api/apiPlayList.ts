import { api } from './api';
import { ITrack, IImage } from './../types/commonTypes';

interface IServerAlbum {
    id: string,
    name: string,
    images: Array<IImage>,
    tracks: {
        items: Array<ITrack>
    }
}

interface IServerPlayList {
    id: string,
    name: string,
    images: Array<IImage>,
    tracks: {
        items: Array<{track : ITrack}>
    }
}

export const apiPlayList = {
    getAlbum(id: string) {
        return api.get<IServerAlbum>(`albums/${id}`)
            .then(response => response.data)
            .then(data => ({
                ...data,
                tracks: data.tracks.items,
            }));
    },

    getPlayList(id: string) {
        return api.get<IServerPlayList>(`playlists/${id}`)
            .then(response => response.data)
            .then(data => ({
                ...data,
                tracks: data.tracks.items.map(item => item.track),
            }));
    }
};
