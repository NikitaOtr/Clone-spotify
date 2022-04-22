import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StatusEnum } from '../../api/api';
import { apiSearch } from '../../api/apiSearch';
import { ISearchData } from '../../api/apiSearch';
import { ISearchItem, ITrack } from './../../types/typeSearch';

const initialState = {
    status: StatusEnum.Success,
    searchText: '',
    albums: [] as Array<ISearchItem>,
    artists: [] as Array<ISearchItem>,
    playlists: [] as Array<ISearchItem>,
    tracks: [] as Array<ITrack>,
};

export const searchReducer = createSlice({
    name: 'searchReducer',
    initialState,
    reducers: {
        setSearchText(state, { payload }: PayloadAction<{searchText: string}>) {
            state.searchText = payload.searchText;
        },

        setData(state, { payload }: PayloadAction<ISearchData>) {
            state.albums = payload.albums.items;
            state.artists = payload.artists.items;
            state.playlists = payload.playlists.items;
            state.tracks = payload.tracks.items;
        },

        setStatus(state, { payload }: PayloadAction<{status: StatusEnum}>) {
            state.status = payload.status;
        }
    },
});

export const searchReducerActions = { setSearchText: searchReducer.actions.setSearchText };

const { setStatus, setData } = searchReducer.actions;

export const fetchAll = createAsyncThunk(
    'searchReducer/fetchAll',
    async (searchText: string, { dispatch }) => {
        try {
            dispatch(setStatus({ status: StatusEnum.Loading }));
            const data = await apiSearch.getAll(searchText);
            dispatch(setData(data));
            dispatch(setStatus({ status: StatusEnum.Success }));
        } catch(e) {
            dispatch(setStatus({ status: StatusEnum.Error }));
            console.error(e);
        }
    }
);