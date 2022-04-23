import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EnumOfStatusFetching } from '../../types/apiTypes';
import { apiArtist } from '../../api/apiArtist';
import { EnumOfSearchTypes, IRelease, ITrack } from '../../types/commonTypes';

const initialState = {
    status: EnumOfStatusFetching.Success,
    artist: null as null | IRelease,
    relatedArtists: {
        type: EnumOfSearchTypes.artists,
        items: [] as Array<IRelease>
    },
    albums: {
        type: EnumOfSearchTypes.albums,
        items: [] as Array<IRelease>
    },
    tracks:  [] as Array<ITrack>,
};

export const artistReducer = createSlice({
    name: 'artistReducer',
    initialState,
    reducers: {
        setStatus(state, { payload }: PayloadAction<{ status: EnumOfStatusFetching }>) {
            state.status = payload.status;
        },

        setArtist(state, { payload }: PayloadAction<{ artist: IRelease }>) {
            state.artist = payload.artist;
        },

        setRelatedArtists(state, { payload }: PayloadAction<{relatedArtists: Array<IRelease>}>) {
            state.relatedArtists.items = payload.relatedArtists;
        },

        setAlbums(state, { payload }: PayloadAction<{ albums: Array<IRelease> }>) {
            state.albums.items = payload.albums;
        },

        setTracks(state, { payload }: PayloadAction<{ tracks: Array<ITrack>}>) {
            state.tracks = payload.tracks;
        },
    },
});

const { setStatus, setArtist, setRelatedArtists, setAlbums, setTracks } = artistReducer.actions;

export const fetchArtist = createAsyncThunk(
    'searchReducer/fetchArtist',
    async ({ id }: { id: string }, { dispatch }) => {
        try {
            dispatch(setStatus({ status: EnumOfStatusFetching.Loading }));

            const artist = await apiArtist.getArtist(id);
            dispatch(setArtist({ artist }));

            const albums = await apiArtist.getArtistAlbums(id);
            dispatch(setAlbums({ albums }));

            const tracks = await apiArtist.getArtistTopTrack(id);
            dispatch(setTracks({ tracks }));

            const relatedArtists = await apiArtist.getRelatedArtists(id);
            dispatch(setRelatedArtists({ relatedArtists }));

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
