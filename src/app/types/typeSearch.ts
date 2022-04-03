export interface IDefault {
    id: string,
    uri: string,
    href: string,
    name: string,
    images: Array<{ url: string }>,
}

export interface IAlbum extends IDefault {
    release_data: string
}

export interface IArtist extends IDefault {
    name: string
}

export interface IPlayList extends IDefault {
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

