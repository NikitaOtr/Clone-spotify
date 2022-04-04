import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StatusEnum } from '../../api/api';
import { apiSearch } from '../../api/apiSearch';
import { ISearchData } from '../../api/apiSearch';
import { ISearchCollectionItems, ITrack } from './../../types/typeSearch';

const initialState = {
    status: StatusEnum.Success,
    searchText: '',
    albums: {
        items: [],
        type: 'album',
        name: 'Альбомы'
    } as ISearchCollectionItems,
    artists: {
        items: [],
        type: 'artist',
        name: 'Артисты'
    } as ISearchCollectionItems,
    playlists: {
        items: [],
        type: 'playlist',
        name: 'Плейлисты'
    } as ISearchCollectionItems,
    tracks: {
        items: [],
        type: 'track',
        name: 'Треки'
    } as ISearchCollectionItems<ITrack>,
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
            state.tracks.items = payload.tracks.items;
        },
        setStatus(state, { payload }: PayloadAction<{status: StatusEnum}>) {
            state.status = payload.status;
        }
    },
});

const { setStatus, setData, setSearchText } = searchReducer.actions;

export const fetch = createAsyncThunk(
    'searchReducer/fetchAll',
    async (searchText: string, { dispatch }) => {
        dispatch(setSearchText({ searchText }));
        try {
            dispatch(setStatus({ status: StatusEnum.Loading }));
            const data = await apiSearch.searchAll(searchText);
            dispatch(setData(data));
            dispatch(setStatus({ status: StatusEnum.Success }));
        } catch(e) {
            dispatch(setStatus({ status: StatusEnum.Error }));
            console.error(e);
        }
    }
);

export const searchReducerAction = searchReducer.actions;