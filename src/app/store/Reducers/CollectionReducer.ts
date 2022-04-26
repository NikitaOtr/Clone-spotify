import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EnumOfStatusFetching } from '../../types/apiTypes';
import { EnumOfSearchTypes, ICollectionOfReleases } from '../../types/commonTypes';
import { apiSearch } from './../../api/apiSearch';
import { apiArtist } from './../../api/apiArtist';

const initialState = {
    status: EnumOfStatusFetching.Loading,
    collection: null as null | ICollectionOfReleases,
};

export const collectionReducer = createSlice({
    name: 'collectionReducer',
    initialState,
    reducers: {
        setStatus(state, { payload }: PayloadAction<EnumOfStatusFetching>) {
            state.status = payload;
        },

        setData(state, { payload }: PayloadAction<ICollectionOfReleases>) {
            state.collection = payload;
        },
    },
});

export const collectionReducerActions = {
    setStatusCollection: collectionReducer.actions.setStatus,
};

const { setStatus, setData } = collectionReducer.actions;


export const fetchSearchCollection = createAsyncThunk(
    'searchReducer/fetchSearchCollection',
    async ({ searchText, type }: {searchText: string, type: EnumOfSearchTypes}, { dispatch }) => {
        try {
            if (type === EnumOfSearchTypes.albums) {
                const collection = await apiSearch.getAlbums(searchText);
                dispatch(setData(collection));
            } else if (type === EnumOfSearchTypes.playlists) {
                const collection = await apiSearch.getPlaylists(searchText);
                dispatch(setData(collection));
            } else if (type === EnumOfSearchTypes.artists) {
                const collection = await apiSearch.getArtists(searchText);
                dispatch(setData(collection));
            }
            dispatch(setStatus(EnumOfStatusFetching.Success));
        } catch(e) {
            dispatch(setStatus(EnumOfStatusFetching.Error));
        }
    },
);

export const fetchArtistCollection = createAsyncThunk(
    'searchReducer/fetchArtistCollection',
    async ({ id, type }: {id: string, type: EnumOfSearchTypes}, { dispatch }) => {
        try {
            if (type === EnumOfSearchTypes.albums) {
                const collection = await apiArtist.getArtistAlbums(id);
                dispatch(setData(collection));
            } else if (type === EnumOfSearchTypes.artists) {
                const collection = await apiArtist.getRelatedArtists(id);
                dispatch(setData(collection));
            }
            dispatch(setStatus(EnumOfStatusFetching.Success));
        } catch(e) {
            dispatch(setStatus(EnumOfStatusFetching.Error));
        }
    },
);


