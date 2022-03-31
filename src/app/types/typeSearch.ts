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

export interface ITrack extends IDefault {
    artists: Array<{ name: string, id: string, uri: string, href: string }>,
    album: { name: string, id: string, uri: string, href: string }
}

