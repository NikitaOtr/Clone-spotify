import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EnumOfStatusFetching } from '../../types/apiTypes';
import { apiSearch } from '../../api/apiSearch';
import { ICollectionOfReleases } from '../../types/commonTypes';

const initialState = {
    status: EnumOfStatusFetching.Success,
    searchText: '',
    mixes: null as null | ICollectionOfReleases,
    collectionOfPlaylists: [] as Array<ICollectionOfReleases>
};

export const mainPageReducer = createSlice({
    name: 'mainPageReducer',
    initialState,
    reducers: {
        setStatus(state, { payload }: PayloadAction<{ status: EnumOfStatusFetching }>) {
            state.status = payload.status;
        },

        setMixes(state, { payload }: PayloadAction<{ mixes: ICollectionOfReleases }>) {
            state.mixes = payload.mixes;
        },

        setPlaylists(state, { payload } : PayloadAction<{ collectionOfPlaylists: Array<ICollectionOfReleases>}>) {
            state.collectionOfPlaylists = payload.collectionOfPlaylists;
        }
    },
});


const { setStatus, setMixes, setPlaylists } = mainPageReducer.actions;

export const fetchMainPage = createAsyncThunk(
    'mainPageReducer/fetchMainPage',
    async (_, { dispatch }) => {
        try {
            dispatch(setStatus({ status: EnumOfStatusFetching.Loading }));
            const mixes = await apiSearch.getPlaylists('max', 6);
            dispatch(setMixes({ mixes }));

            Promise.allSettled([
                apiSearch.getPlaylists('dua', 10),
                apiSearch.getPlaylists('nik', 10),
                apiSearch.getPlaylists('lol', 10),
                apiSearch.getPlaylists('ad', 10),
                apiSearch.getPlaylists('zara', 10),
                apiSearch.getPlaylists('dava', 10),
            ]).then(data => {
                const arrayResponse = [];
                for (const response of data) {
                    if (response.status === 'fulfilled') {
                        arrayResponse.push(response.value);
                    }
                }
                dispatch(setPlaylists({ collectionOfPlaylists: arrayResponse }));
            });

            dispatch(setStatus({ status: EnumOfStatusFetching.Success }));
        } catch(e) {
            dispatch(setStatus({ status: EnumOfStatusFetching.Error }));
            if (e instanceof Error) {
                console.error(e.message);
            } else {
                console.error(e);
            }
        }
    }
);