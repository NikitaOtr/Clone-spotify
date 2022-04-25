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

        setCollection(state, { payload }: PayloadAction<ICollectionOfReleases>) {
            state.collection = payload;
        },
    },
});

export const collectionReducerActions = {
    setStatusCollection: collectionReducer.actions.setStatus,
};

const { setStatus, setCollection } = collectionReducer.actions;


export const fetchCollection = createAsyncThunk(
    'searchReducer/fetchCollection',
    async ({ searchText, type }: {searchText: string, type: EnumOfSearchTypes}, { dispatch }) => {
        try {
            if (type === EnumOfSearchTypes.albums) {
                const collection = await apiSearch.getAlbums(searchText);
                dispatch(setCollection(collection));
            } else if (type === EnumOfSearchTypes.playlists) {
                const collection = await apiSearch.getPlaylists(searchText);
                dispatch(setCollection(collection));
            } else if (type === EnumOfSearchTypes.artists) {
                const collection = await apiSearch.getArtists(searchText);
                dispatch(setCollection(collection));
            }
            dispatch(setStatus(EnumOfStatusFetching.Success));
        } catch(e) {
            dispatch(setStatus(EnumOfStatusFetching.Error));
            if (e instanceof Error) {
                console.error(e.message);
            } else {
                console.error(e);
            }
        }
    }
);

export const fetchT = createAsyncThunk(
    'searchReducer/fetchT',
    async ({ id, type }: {id: string, type: EnumOfSearchTypes}, { dispatch }) => {
        try {
            if (type === EnumOfSearchTypes.albums) {
                const collection = await apiArtist.getArtistAlbums(id);
                dispatch(setCollection(collection));
            } else if (type === EnumOfSearchTypes.artists) {
                const collection = await apiArtist.getRelatedArtists(id);
                dispatch(setCollection(collection));
            }
            dispatch(setStatus(EnumOfStatusFetching.Success));
        } catch(e) {
            dispatch(setStatus(EnumOfStatusFetching.Error));
            if (e instanceof Error) {
                console.error(e.message);
            } else {
                console.log(e);
            }
        }
    }
);


