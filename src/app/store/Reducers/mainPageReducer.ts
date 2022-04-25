import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EnumOfStatusFetching } from '../../types/apiTypes';
import { apiSearch } from '../../api/apiSearch';
import { ICollectionOfReleases } from '../../types/commonTypes';

const initialState = {
    status: EnumOfStatusFetching.Success,
    mixes: null as null | ICollectionOfReleases,
    collectionOfPlaylists: [] as Array<ICollectionOfReleases>
};

export const mainPageReducer = createSlice({
    name: 'mainPageReducer',
    initialState,
    reducers: {
        setStatus(state, { payload }: PayloadAction<EnumOfStatusFetching>) {
            state.status = payload;
        },

        setData(state, { payload }:PayloadAction<Array<ICollectionOfReleases>>) {
            state.mixes = payload[0];
            state.collectionOfPlaylists = payload.slice(1);
        },
    },
});

export const mainPageReducerActions = {
    setStatusMainPage: mainPageReducer.actions.setStatus,
};

const { setStatus, setData } = mainPageReducer.actions;

export const fetchMainPage = createAsyncThunk(
    'mainPageReducer/fetchMainPage',
    async (_, { dispatch }) => {
        try {
            Promise.allSettled([
                apiSearch.getPlaylists('max', 6),
                apiSearch.getPlaylists('Dua', 10),
                apiSearch.getPlaylists('nik', 10),
                apiSearch.getPlaylists('lol', 10),
                apiSearch.getPlaylists('ad', 10),
                apiSearch.getPlaylists('zara', 10),
                apiSearch.getPlaylists('shawn', 10),
            ]).then(data => {
                const arrayResponse = [];
                for (const response of data) {
                    if (response.status === 'fulfilled') {
                        arrayResponse.push(response.value);
                    }
                }
                dispatch(setData(arrayResponse));
                dispatch(setStatus(EnumOfStatusFetching.Success));
            });
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