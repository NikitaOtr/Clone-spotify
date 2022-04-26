import { api } from './api';
import { ITrack, IImage, EnumOfPlaylistTypes } from './../types/commonTypes';

interface IServerAlbum {
    id: string,
    type: EnumOfPlaylistTypes,
    name: string,
    images: Array<IImage>,
    tracks: {
        items: Array<ITrack>
    }
}

interface IServerPlayList {
    id: string,
    type: EnumOfPlaylistTypes,
    name: string,
    images: Array<IImage>,
    tracks: {
        items: Array<{track : ITrack}>
    }
}

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
