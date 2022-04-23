export enum EnumOfPlaylistTypes {
    album = 'album',
    playlist = 'playlist',
}

export enum EnumOfTargetTypes {
    album = 'album',
    artist = 'artist',
    playlist = 'playlist',
    track = 'track',
}

export enum EnumOfSearchTypes {
    albums = 'albums',
    artists = 'artists',
    playlists = 'playlists',
}

export interface IImage {
    url: string,
}

export interface IRelease {
    id: string,
    name: string,
    images: Array<IImage>,
    type: EnumOfTargetTypes,
}

export interface ITrack {
    id: string,
    name: string,
    type: string,
    preview_url: string,
    duration_ms: number,
    artists: Array<IRelease>,
    album?: IRelease,
}

export interface IPlayList {
    id: string,
    name: string,
    images: Array<IImage>,
    tracks: Array<ITrack>,
}

export interface ICollectionOfReleases<T = IRelease> {
    type: EnumOfSearchTypes
    items: Array<T>
}