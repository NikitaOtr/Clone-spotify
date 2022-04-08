export interface IImage {
    url : string
}
export interface ISearchItem {
    id: string,
    name: string,
    images: Array<IImage>,
    type: string,
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

export interface ISearchCollectionItems<T = ISearchItem> {
    items: Array<T>,
    type: string,
    name: string,
}

export type IHistory = {
    type: string,
    searchText: string
}