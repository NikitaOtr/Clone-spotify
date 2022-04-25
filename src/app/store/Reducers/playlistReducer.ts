import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EnumOfStatusFetching } from '../../types/apiTypes';
import { apiPlayList } from '../../api/apiPlayList';
import { EnumOfPlaylistTypes, IPlayList,  } from './../../types/commonTypes';

const initialState = {
    status: EnumOfStatusFetching.Success,
    playlist: null as null | IPlayList,
};

export const playlistReducer = createSlice({
    name: 'playlistReducer',
    initialState,
    reducers: {
        setStatus(state, { payload }: PayloadAction<EnumOfStatusFetching>) {
            state.status = payload;
        },

        setData(state, { payload }: PayloadAction<IPlayList>) {
            state.playlist = payload;
        },
    },
});

export const playlistReducerActions = {
    setStatusPlaylist: playlistReducer.actions.setStatus,
};

const { setStatus, setData } = playlistReducer.actions;

export const fetchPlaylist = createAsyncThunk(
    'playlistReducer/fetchPlaylist',
    async ({ id, type }: { id: string, type: EnumOfPlaylistTypes }, { dispatch }) => {
        try {
            if (type === EnumOfPlaylistTypes.album) {
                const playlist = await apiPlayList.getAlbum(id);
                dispatch(setData(playlist));
            } else if (type === EnumOfPlaylistTypes.playlist) {
                const playlist = await apiPlayList.getPlayList(id);
                dispatch(setData(playlist));
            }
            dispatch(setStatus(EnumOfStatusFetching.Success));
        } catch(e) {
            dispatch(setStatus(EnumOfStatusFetching.Error));
            if (e instanceof Error) {
                console.error(e.message);
            } else {
                console.error(e);
            }
        }
    }
);