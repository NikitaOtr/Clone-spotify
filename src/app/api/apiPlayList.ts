import { api } from './api';
import { EnumOfPlaylistTypes } from './../types/commonTypes';
import { IServerAlbum, IServerPlayList } from '../types/serverTypes';

export const apiPlayList = {
    getAlbum(id: string) {
        return api.get<IServerAlbum>(`albums/${id}`)
            .then(response => ({
                ...response.data,
                tracks: {
                    type: EnumOfPlaylistTypes.album,
                    items: response.data.tracks.items,
                },
            }));
    },

    getPlayList(id: string) {
        return api.get<IServerPlayList>(`playlists/${id}`)
            .then(response => ({
                ...response.data,
                tracks: {
                    type: EnumOfPlaylistTypes.playlist,
                    items: response.data.tracks.items.map(item => item.track),
                },
            }));
    },
};
