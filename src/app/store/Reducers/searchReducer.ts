import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StatusEnum } from '../../api/api';
import { IReturn, searchApi } from '../../api/search';
import { IArtist, IAlbum, IPlayList, ITrack } from '../../types/typeSearch';

const initialState = {
    status: StatusEnum.Success,
    searchText: '',
    albums: {
        items: [] as Array<IAlbum>,
        href: '',
    },
    artists: {
        items: [] as Array<IArtist>,
        href: '',
    },
    playlists: {
        items: [] as Array<IPlayList>,
        href: '',
    },
    tracks: {
        items: [] as Array<ITrack>,
        href: '',
    },
};

export const searchReducer = createSlice({
    name: 'searchReducer',
    initialState,
    reducers: {
        setSearchText(state, { payload }: PayloadAction<{text: string}>) {
            state.searchText = payload.text;
        },
        setData(state, { payload }: PayloadAction<IReturn>) {
            state.albums = {
                ...payload.albums,
                href: payload.albums.href.slice(34),
            };
            state.artists = {
                ...payload.artists,
                href: payload.artists.href.slice(34),
            };
            state.playlists = payload.playlists;
            state.tracks = payload.tracks;
            state.status = StatusEnum.Success;
        },
        setLoading(state) {
            state.status = StatusEnum.Loading;
        },
        setError(state) {
            state.status = StatusEnum.Error;
        }
    },
});

const { setData, setError, setLoading, setSearchText } = searchReducer.actions;

export const fetch = createAsyncThunk(
    'searchReducer/fetchAll',
    async (text: string, { dispatch }) => {
        dispatch(setSearchText({ text }));
        try {
            dispatch(setLoading());
            const data = await searchApi.search(text);
            dispatch(setData(data));
        } catch(e) {
            dispatch(setError());
            console.error(e);
        }
    }
);

export const searchReducerAction = searchReducer.actions;