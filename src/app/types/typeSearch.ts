export interface IImage {
    url : string
}

export enum EnumSearchType {
    album = 'album',
    artist = 'artist',
    playlist = 'playlist',
}

export interface ISearchItem {
    id: string,
    name: string,
    images: Array<IImage>,
    type: EnumSearchType,
}

export interface ITrack {
    id: string,
    uri?: string,
    href?: string,
    name: string,
    type: string,
    preview_url: string,
    duration_ms: number,
    artists: Array<ISearchItem>,
    album?: ISearchItem
}
