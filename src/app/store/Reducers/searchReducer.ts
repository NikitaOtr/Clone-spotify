import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EnumOfStatusFetching } from '../../types/apiTypes';
import { apiSearch } from '../../api/apiSearch';
import { ISearchData } from '../../api/apiSearch';
import { EnumOfSearchTypes, IRelease, ITrack } from './../../types/commonTypes';

const initialState = {
    status: EnumOfStatusFetching.Success,
    searchText: '',
    albums: {
        type: EnumOfSearchTypes.albums,
        items: [] as Array<IRelease>
    },
    artists: {
        type: EnumOfSearchTypes.artists,
        items: [] as Array<IRelease>
    },
    playlists: {
        type: EnumOfSearchTypes.playlists,
        items: [] as Array<IRelease>,
    },
    tracks: [] as Array<ITrack>
};

export const searchReducer = createSlice({
    name: 'searchReducer',
    initialState,
    reducers: {
        setSearchText(state, { payload }: PayloadAction<{searchText: string}>) {
            state.searchText = payload.searchText;
        },

        setData(state, { payload }: PayloadAction<ISearchData>) {
            state.albums.items = payload.albums.items;
            state.artists.items = payload.artists.items;
            state.playlists.items = payload.playlists.items;
            state.tracks = payload.tracks.items;
        },

        setStatus(state, { payload }: PayloadAction<{ status: EnumOfStatusFetching}>) {
            state.status = payload.status;
        }
    },
});

export const searchReducerActions = { setSearchText: searchReducer.actions.setSearchText };

const { setStatus, setData } = searchReducer.actions;

export const fetchAll = createAsyncThunk(
    'searchReducer/fetchAll',
    async ({ searchText }: { searchText: string }, { dispatch }) => {
        try {
            dispatch(setStatus({ status: EnumOfStatusFetching.Loading }));
            const data = await apiSearch.getAll(searchText);
            dispatch(setData(data));
            dispatch(setStatus({ status: EnumOfStatusFetching.Success }));
        } catch(e) {
            dispatch(setStatus({ status: EnumOfStatusFetching.Error }));
            console.error(e);
        }
    }
);