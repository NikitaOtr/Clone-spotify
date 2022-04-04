import { api } from './api';
import { IAlbum, ISearchItem } from './../types/typeSearch';
import { tokenInstance } from './tokenInstance';

interface ITarget<T> {
    items: Array<T>
}

export interface IReturn {
    albums: ITarget<ISearchItem>
}

export const collectionApi = {
    getItem(type: string, q: string) {
        console.log(tokenInstance.token);
        return api.get<IReturn>(`search?type=${type}&q=${q}&limit=40`)
            .then(response => {
                console.log(response.data);
                return response.data;
            });
    },

};