import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EnumOfStatusFetching } from '../../types/apiTypes';
import { apiPlayList } from '../../api/apiPlayList';
import { EnumOfPlaylistTypes, IPlayList,  } from './../../types/commonTypes';

const initialState = {
    status: EnumOfStatusFetching.Success,
    playlist: null as null | IPlayList,
};

export const playListReducer = createSlice({
    name: 'playlistReducer',
    initialState,
    reducers: {
        setStatus(state, { payload }: PayloadAction<{ status: EnumOfStatusFetching }>) {
            state.status = payload.status;
        },

        setData(state, { payload }: PayloadAction<{ playlist: IPlayList }>) {
            state.playlist = payload.playlist;
        },
    },
});

const { setStatus, setData } = playListReducer.actions;

export const fetchPlaylist = createAsyncThunk(
    'playlistReducer/fetchPalyList',
    async ({ id, type }: { id: string, type: EnumOfPlaylistTypes }, { dispatch }) => {
        try {
            dispatch(setStatus({ status: EnumOfStatusFetching.Loading }));
            if (type === EnumOfPlaylistTypes.album) {
                const playlist = await apiPlayList.getAlbum(id);
                dispatch(setData({ playlist }));
            } else if (type === EnumOfPlaylistTypes.playlist) {
                const playlist = await apiPlayList.getPlayList(id);
                dispatch(setData({ playlist }));
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