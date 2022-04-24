import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EnumOfStatusFetching } from '../../types/apiTypes';
import { EnumOfSearchTypes, ICollectionOfReleases } from '../../types/commonTypes';
import { apiSearch } from './../../api/apiSearch';
import { apiArtist } from './../../api/apiArtist';

const initialState = {
    status: EnumOfStatusFetching.Success,
    collection: null as null | ICollectionOfReleases,
};

export const collectionReducer = createSlice({
    name: 'collectionReducer',
    initialState,
    reducers: {
        setStatus(state, { payload }: PayloadAction<{status: EnumOfStatusFetching}>) {
            state.status = payload.status;
        },

        setCollection(state, { payload }: PayloadAction<{ collection: ICollectionOfReleases }>) {
            state.collection = payload.collection;
        },
    },
});

const { setStatus, setCollection } = collectionReducer.actions;

export const fetchCollection = createAsyncThunk(
    'searchReducer/fetchCollection',
    async ({ searchText, type }: {searchText: string, type: EnumOfSearchTypes}, { dispatch }) => {
        try {
            dispatch(setStatus({ status: EnumOfStatusFetching.Loading }));
            if (type === EnumOfSearchTypes.albums) {
                const collection = await apiSearch.getAlbums(searchText);
                dispatch(setCollection({ collection }));
            } else if (type === EnumOfSearchTypes.playlists) {
                const collection = await apiSearch.getPlaylists(searchText);
                dispatch(setCollection({ collection }));
            } else if (type === EnumOfSearchTypes.artists) {
                const collection = await apiSearch.getArtists(searchText);
                dispatch(setCollection({ collection }));
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
                const collection = await apiArtist.getArtistAlbums(id);
                dispatch(setCollection({ collection }));
            } else if (type === EnumOfSearchTypes.artists) {
                const collection = await apiArtist.getRelatedArtists(id);
                dispatch(setCollection({ collection }));
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


