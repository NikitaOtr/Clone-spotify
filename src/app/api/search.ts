import { api } from './api';
import { IArtist, IAlbum, IPlayList, ITrack }  from './../types/typeSearch';

interface ITarget<T> {
    items: Array<T>
}

export interface IReturn {
    albums: ITarget<IAlbum>
    artists: ITarget<IArtist>
    playlists: ITarget<IPlayList>
    tracks: ITarget<ITrack>
}

export const searchApi = {
    search(text: string) {
        return api.get<IReturn>(`search?type=artist,album,playlist,track&q=${text}`)
            .then(response => {
                console.log(response.data);
                return response.data;
            });
    },

};