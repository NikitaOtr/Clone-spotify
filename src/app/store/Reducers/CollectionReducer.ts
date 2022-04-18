import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StatusEnum } from '../../api/api';
import { ISearchItem, EnumSearchType } from '../../types/typeSearch';
import { apiSearch, IServerCollectionItems } from './../../api/apiSearch';
import { apiArtist } from './../../api/apiArtist';

const initialState = {
    status: StatusEnum.Success,
    collection: [] as Array<ISearchItem>
};

export const collectionReducer = createSlice({
    name: 'collectionReducer',
    initialState,
    reducers: {
        setStatus(state, { payload }: PayloadAction<{status: StatusEnum}>) {
            state.status = payload.status;
        },
        setData(state, { payload }: PayloadAction<IServerCollectionItems>) {
            state.collection = payload.items;
        },
    },
});

const { setStatus, setData } = collectionReducer.actions;

export const fetchCollection = createAsyncThunk(
    'searchReducer/fetchCollection',
    async ({ searchText, type }: {searchText: string, type: EnumSearchType}, { dispatch }) => {
        try {
            dispatch(setStatus({ status: StatusEnum.Loading }));
            let data;
            if (type === EnumSearchType.album) {
                data = await apiSearch.getAlbums(searchText);
                dispatch(setData(data));
            } else if (type === EnumSearchType.playlist) {
                data = await apiSearch.getPlaylists(searchText);
                dispatch(setData(data));
            } else if (type === EnumSearchType.artist) {
                data = await apiSearch.getArtists(searchText);
                dispatch(setData(data));
            }
            dispatch(setStatus({ status: StatusEnum.Success }));
        } catch(e) {
            dispatch(setStatus({ status: StatusEnum.Error }));
            console.error(e);
        }
    }
);

export const fetchT = createAsyncThunk(
    'searchReducer/fetchT',
    async ({ id, type }: {id: string, type: EnumSearchType}, { dispatch }) => {
        try {
            dispatch(setStatus({ status: StatusEnum.Loading }));
            if (type === EnumSearchType.album) {
                const data = await apiArtist.getArtistAlbums(id);
                dispatch(setData({ items: data }));
            } else if (type === EnumSearchType.artist) {
                const data = await apiArtist.getRelatedArtists(id);
                dispatch(setData({ items: data }));
            }
            dispatch(setStatus({ status: StatusEnum.Success }));
        } catch(e) {
            dispatch(setStatus({ status: StatusEnum.Error }));
            console.error(e);
        }
    }
);


