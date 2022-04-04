import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StatusEnum } from '../../api/api';
import { IReturn, collectionApi } from '../../api/collection';
import { IArtist, IAlbum, IPlayList, ITrack, ISearchItem } from '../../types/typeSearch';

const initialState = {
    status: StatusEnum.Success,
    collection: [] as Array<ISearchItem>
};

export const collectionReducer = createSlice({
    name: 'collectionReducer',
    initialState,
    reducers: {
        setData(state, { payload }: PayloadAction<IReturn>) {
            state.collection = payload.albums.items;
        },
        setLoading(state) {
            state.status = StatusEnum.Loading;
        },
        setError(state) {
            state.status = StatusEnum.Error;
        }
    },
});

const { setData, setError, setLoading } = collectionReducer.actions;

export const fetchCollection = createAsyncThunk(
    'searchReducer/fetchAll',
    async ({ type, q } : {type: string, q: string}, { dispatch }) => {
        try {
            dispatch(setLoading());
            const data = await collectionApi.getItem(type, q);
            dispatch(setData(data));
        } catch(e) {
            dispatch(setError());
            console.error(e);
        }
    }
);

export const searchReducerAction = collectionReducer.actions;