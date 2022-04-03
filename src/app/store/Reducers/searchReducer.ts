import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StatusEnum } from '../../api/api';
import { IReturn, searchApi } from '../../api/search';
import { IArtist, IAlbum, IPlayList, ITrack } from '../../types/typeSearch';


const initialState = {
    status: StatusEnum.Success,
    albums: [] as Array<IAlbum>,
    artists: [] as Array<IArtist>,
    playlists: [] as Array<IPlayList>,
    tracks: [] as Array<ITrack>,
};


export const searchReducer = createSlice({
    name: 'searchReducer',
    initialState,
    reducers: {
        setData(state, { payload }: PayloadAction<IReturn>) {
            state.albums = payload.albums.items;
            state.artists = payload.artists.items;
            state.playlists = payload.playlists.items;
            state.tracks = payload.tracks.items;
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

const { setData, setError, setLoading } = searchReducer.actions;

export const fetch = createAsyncThunk(
    'searchReducer/fetchAll',
    async (text: string, { dispatch }) => {
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