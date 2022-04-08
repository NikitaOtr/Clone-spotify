import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StatusEnum } from '../../api/api';
import { apiPlayList, TestAlbum } from '../../api/apiPlayList';

const initialState = {
    status: StatusEnum.Success,
    album: null as null | TestAlbum,
};

export const playListReducer = createSlice({
    name: 'playListReducer',
    initialState,
    reducers: {
        setStatus(state, { payload }: PayloadAction<{ status: StatusEnum }>) {
            state.status = payload.status;
        },
        setData(state, { payload }: PayloadAction<TestAlbum>) {
            state.album = payload;
        },
    },
});

const { setStatus, setData } = playListReducer.actions;

export const fetchAlbum = createAsyncThunk(
    'playlistReducer/fetchAlbum',
    async (id: string, { dispatch }) => {
        try {
            dispatch(setStatus({ status: StatusEnum.Loading }));
            const data = await apiPlayList.getAlbum(id);
            dispatch(setData(data));
            dispatch(setStatus({ status: StatusEnum.Success }));
        } catch(e) {
            dispatch(setStatus({ status: StatusEnum.Error }));
            console.error(e);
        }
    }
);

export const fetchPlayList = createAsyncThunk(
    'playlistReducer/fetchPalyList',
    async (id: string, { dispatch }) => {
        try {
            dispatch(setStatus({ status: StatusEnum.Loading }));
            const data = await apiPlayList.getPlayList(id);
            dispatch(setData({ ...data, tracks: {
                items: data.tracks.items.map(item => item.track)
            } }));
            dispatch(setStatus({ status: StatusEnum.Success }));
        } catch(e) {
            dispatch(setStatus({ status: StatusEnum.Error }));
            console.error(e);
        }
    }
);

export const searchReducerAction = playListReducer.actions;