import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { apiSearch } from '../../api/apiSearch';

import { EnumOfStatusFetching } from '../../types/apiTypes';
import { ICollectionOfReleases, ICollectionOfTracks } from './../../types/commonTypes';

interface ISearchData {
    albums: ICollectionOfReleases,
    artists: ICollectionOfReleases,
    playlists: ICollectionOfReleases,
    tracks: ICollectionOfTracks,
}

const initialState = {
    status: EnumOfStatusFetching.Loading,
    searchText: 'popular',
    albums: null as null | ICollectionOfReleases,
    artists: null as null | ICollectionOfReleases,
    playlists: null as null | ICollectionOfReleases,
    tracks: null as null | ICollectionOfTracks,
};

export const searchReducer = createSlice({
    name: 'searchReducer',
    initialState,
    reducers: {
        setStatus(state, { payload }: PayloadAction<EnumOfStatusFetching>) {
            state.status = payload;
        },

        setSearchText(state, { payload }: PayloadAction<string>) {
            state.searchText = payload;
        },

        setData(state, { payload }: PayloadAction<ISearchData>) {
            state.albums = payload.albums;
            state.artists = payload.artists;
            state.playlists = payload.playlists;
            state.tracks = payload.tracks;
        },
    },
});

export const searchReducerActions = {
    setSearchText: searchReducer.actions.setSearchText,
    setStatusSearchPage: searchReducer.actions.setStatus,
};

const { setStatus, setData } = searchReducer.actions;

export const fetchSearch = createAsyncThunk(
    'searchReducer/fetchSearch',
    async ({ searchText }: { searchText: string }, { dispatch }) => {
        try {
            const data = await apiSearch.getAll(searchText);
            dispatch(setData(data));
            dispatch(setStatus(EnumOfStatusFetching.Success));
        } catch(e) {
            dispatch(setStatus(EnumOfStatusFetching.Error));
        }
    },
);