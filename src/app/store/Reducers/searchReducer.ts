import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { search } from './../../api/api';
import { tokenInstance } from './../../api/tokenInstance';

interface IAlbum {
    id: string,
    uri: string,
    href: string,
    name: string,
    images: Array<{ url: string }>,
    release_data: string
}


export interface IArtist {
    id: string,
    uri: string,
    href: string,
    name: string,
    images: Array<{ url: string }>,
}

interface IPlayList {
    id: string,
    uri: string,
    href: string,
    name: string,
    images: Array<{ url: string }>,
    tracks: {
        href: string
    }
}

interface ITrack {
    id: string,
    uri: string,
    href: string,
    name: string,
    artists: Array<{name: string, id: string, uri: string, href: string}>,
    album: {name: string, id: string, uri: string, href: string}
}

const initialState = {
    albums: [] as Array<IAlbum>,
    artists: [] as Array<IArtist>,
    episodes: [],
    playlists: [] as Array<IPlayList>,
    shows: [],
    tracks: [] as Array<ITrack>,
};

export const searchReducer = createSlice({
    name: 'searchReducer',
    initialState,
    reducers: {
        setArtists(state, { payload }: PayloadAction<{artists: Array<IArtist>}>) {
            state.artists = payload.artists;
        }
    },
});

const { setArtists } = searchReducer.actions;

export const fetch = createAsyncThunk(
    'searchReducer/fetchAll',
    async (text: string, { dispatch }) => {
        try {
            console.log('thunk');
            const data = await search(text);
            console.log(data);
            console.log(data?.artists.items);
            dispatch(setArtists({ artists: data?.artists.items || [] }));
        } catch(e: any) {
            console.log(e?.response);
            if (e?.response.status === 401) {
                console.log(e.response.status);
                await tokenInstance.getToken();
                const data = await search(text);
                dispatch(setArtists({ artists: data?.artists.items || [] }));
            }
        }
    }
);

export const searchReducerAction = searchReducer.actions;