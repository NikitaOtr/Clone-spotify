import { api } from './api';
import { ITrack, IImage } from './../types/typeSearch';
import { IPlayList } from './../types/typePlaylist';

export interface ServerPlayList {
    id: string,
    name: string,
    images: Array<IImage>,
    tracks: {
        items: Array<{track : ITrack}>
    }
}

export const apiPlayList = {
    getAlbum(id: string) {
        return api.get<IPlayList>(`albums/${id}`)
            .then(response => response.data);
    },

    getPlayList(id: string) {
        return api.get<ServerPlayList>(`playlists/${id}`)
            .then(response => response.data)
            .then(data => ({
                ...data,
                tracks: {
                    items: data.tracks.items.map(item => item.track)
                },
            }));
    }
};
