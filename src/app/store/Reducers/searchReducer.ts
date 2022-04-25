import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EnumOfStatusFetching } from '../../types/apiTypes';
import { apiSearch } from '../../api/apiSearch';
import { ICollectionOfReleases, ITrack } from './../../types/commonTypes';

interface IFetchData {
    albums: ICollectionOfReleases,
    artists: ICollectionOfReleases,
    playlists: ICollectionOfReleases,
    tracks: Array<ITrack>,
}

const initialState = {
    status: EnumOfStatusFetching.Loading,
    searchText: 'popular',
    albums: null as null | ICollectionOfReleases,
    artists: null as null | ICollectionOfReleases,
    playlists: null as null | ICollectionOfReleases,
    tracks: [] as Array<ITrack>
};

export const searchReducer = createSlice({
    name: 'searchReducer',
    initialState,
    reducers: {
        setStatus(state, { payload }: PayloadAction<EnumOfStatusFetching>) {
            state.status = payload;
        },

        setSearchText(state, { payload }: PayloadAction<string>) {
            state.searchText = payload;
        },

        setData(state, { payload }: PayloadAction<IFetchData>) {
            state.albums = payload.albums;
            state.artists = payload.artists;
            state.playlists = payload.playlists;
            state.tracks = payload.tracks;
        },
    },
});

export const searchReducerActions = {
    setSearchText: searchReducer.actions.setSearchText,
    setStatusSearchPage: searchReducer.actions.setStatus,
};

const { setStatus, setData } = searchReducer.actions;

export const fetchAll = createAsyncThunk(
    'searchReducer/fetchAll',
    async ({ searchText }: { searchText: string }, { dispatch }) => {
        try {
            const data = await apiSearch.getAll(searchText);
            dispatch(setData(data));
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