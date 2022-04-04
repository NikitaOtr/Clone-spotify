interface IImage {
    url : string
}

export interface ISearchItem {
    id: string,
    href: string,
    name: string,
    images: Array<IImage>,
}

export interface IAlbum extends ISearchItem {
    releaseData: string
}

export interface IArtist extends ISearchItem {
    name: string
}

export interface IPlayList extends ISearchItem {
    tracks: {
        href: string
    }
}

export interface ITrack {
    id: string,
    uri: string,
    href: string,
    name: string,
    duration_ms: number,
    artists: Array<IArtist>,
    album: IAlbum
}

