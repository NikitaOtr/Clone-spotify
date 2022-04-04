import { api } from './api';
import { IArtist, IAlbum, IPlayList, ITrack }  from './../types/typeSearch';
import { tokenInstance } from './tokenInstance';

interface ITarget<T> {
    items: Array<T>,
    href: string
}

export interface IReturn {
    albums: ITarget<IAlbum>
    artists: ITarget<IArtist>
    playlists: ITarget<IPlayList>
    tracks: ITarget<ITrack>
}

export const searchApi = {
    search(text: string) {
        console.log(tokenInstance.token);
        return api.get<IReturn>(`search?type=album,artist,playlist,track&q=${text}`)
            .then(response => {
                console.log(response.data);
                return response.data;
            });
    },
};