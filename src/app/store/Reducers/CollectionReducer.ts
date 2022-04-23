import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EnumOfStatusFetching } from '../../types/apiTypes';
import { IRelease, EnumOfSearchTypes } from '../../types/commonTypes';
import { apiSearch, IServerCollectionItems } from './../../api/apiSearch';
import { apiArtist } from './../../api/apiArtist';

const initialState = {
    status: EnumOfStatusFetching.Success,
    collection: [] as Array<IRelease>
};

export const collectionReducer = createSlice({
    name: 'collectionReducer',
    initialState,
    reducers: {
        setStatus(state, { payload }: PayloadAction<{status: EnumOfStatusFetching}>) {
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
    async ({ searchText, type }: {searchText: string, type: EnumOfSearchTypes}, { dispatch }) => {
        try {
            dispatch(setStatus({ status: EnumOfStatusFetching.Loading }));
            let data;
            if (type === EnumOfSearchTypes.albums) {
                data = await apiSearch.getAlbums(searchText);
                dispatch(setData(data));
            } else if (type === EnumOfSearchTypes.playlists) {
                data = await apiSearch.getPlaylists(searchText);
                dispatch(setData(data));
            } else if (type === EnumOfSearchTypes.artists) {
                data = await apiSearch.getArtists(searchText);
                dispatch(setData(data));
            }
            dispatch(setStatus({ status: EnumOfStatusFetching.Success }));
        } catch(e) {
            dispatch(setStatus({ status: EnumOfStatusFetching.Error }));
            console.error(e);
        }
    }
);

export const fetchT = createAsyncThunk(
    'searchReducer/fetchT',
    async ({ id, type }: {id: string, type: EnumOfSearchTypes}, { dispatch }) => {
        try {
            dispatch(setStatus({ status: EnumOfStatusFetching.Loading }));
            if (type === EnumOfSearchTypes.albums) {
                const data = await apiArtist.getArtistAlbums(id);
                dispatch(setData({ items: data }));
            } else if (type === EnumOfSearchTypes.artists) {
                const data = await apiArtist.getRelatedArtists(id);
                dispatch(setData({ items: data }));
            }
            dispatch(setStatus({ status: EnumOfStatusFetching.Success }));
        } catch(e) {
            dispatch(setStatus({ status: EnumOfStatusFetching.Error }));
            if (e instanceof Error) {
                console.error(e.message);
            } else {
                console.log(e);
            }
        }
    }
);


