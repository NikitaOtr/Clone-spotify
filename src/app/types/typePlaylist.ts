import { IImage, ITrack } from './typeSearch';

export interface IPlayList {
    id: string,
    name: string,
    images: Array<IImage>,
    tracks: {
        items: Array<ITrack>
    }
}

export enum TypePlaylistEnum {
    album = 'album',
    playlist = 'playlist',
}