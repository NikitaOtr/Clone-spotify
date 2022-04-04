import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StatusEnum } from '../../api/api';
import { ISearchItem, IHistory } from '../../types/typeSearch';
import { apiSearch, IServerCollectionItems } from './../../api/apiSearch';

const initialState = {
    status: StatusEnum.Success,
    collection: [] as Array<ISearchItem>
};

export const collectionReducer = createSlice({
    name: 'collectionReducer',
    initialState,
    reducers: {
        setStatus(state, { payload }: PayloadAction<{status: StatusEnum}>) {
            state.status = payload.status;
        },
        setData(state, { payload }: PayloadAction<IServerCollectionItems>) {
            state.collection = payload.items;
        },
    },
});

const { setStatus, setData } = collectionReducer.actions;

export const fetchCollection = createAsyncThunk(
    'searchReducer/fetchAll',
    async ({ type, searchText }: IHistory, { dispatch }) => {
        try {
            dispatch(setStatus({ status: StatusEnum.Loading }));
            const data = await apiSearch.searchForType(type, searchText);
            dispatch(setData({ ...data.albums, ...data.artists, ...data.playlists }));
            dispatch(setStatus({ status: StatusEnum.Success }));
        } catch(e) {
            dispatch(setStatus({ status: StatusEnum.Error }));
            console.error(e);
        }
    }
);

export const searchReducerAction = collectionReducer.actions;