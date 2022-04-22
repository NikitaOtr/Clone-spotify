import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StatusEnum } from '../../api/api';
import { apiPlayList } from '../../api/apiPlayList';
import { IPlayList, TypePlaylistEnum } from './../../types/typePlaylist';

const initialState = {
    status: StatusEnum.Success,
    playlist: null as null | IPlayList,
};

export const playListReducer = createSlice({
    name: 'playListReducer',
    initialState,
    reducers: {
        setStatus(state, { payload }: PayloadAction<{ status: StatusEnum }>) {
            state.status = payload.status;
        },

        setData(state, { payload }: PayloadAction<IPlayList>) {
            state.playlist = payload;
        },
    },
});

const { setStatus, setData } = playListReducer.actions;

export const fetchPlaylist = createAsyncThunk(
    'playlistReducer/fetchPalyList',
    async ({ id, type }: { id: string, type: TypePlaylistEnum }, { dispatch }) => {
        try {
            dispatch(setStatus({ status: StatusEnum.Loading }));
            let data;
            if (type === TypePlaylistEnum.album) {
                data = await apiPlayList.getAlbum(id);
                dispatch(setData(data));
            } else if (type === TypePlaylistEnum.playlist) {
                data = await apiPlayList.getPlayList(id);
                dispatch(setData(data));
            }
            dispatch(setStatus({ status: StatusEnum.Success }));
        } catch(e) {
            dispatch(setStatus({ status: StatusEnum.Error }));
            console.error(e);
        }
    }
);