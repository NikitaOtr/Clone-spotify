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
    tracks: [] as Array<ITrack>,
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

        setRelatedArtists(state, { payload }: PayloadAction<{ relatedArtists: Array<IRelease> }>) {
            state.relatedArtists.items = payload.relatedArtists;
        },

        setAlbums(state, { payload }: PayloadAction<{ albums: Array<IRelease> }>) {
            state.albums.items = payload.albums;
        },

        setTracks(state, { payload }: PayloadAction<{ tracks: Array<ITrack> }>) {
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

            Promise.allSettled([
                apiArtist.getArtist(id),
                apiArtist.getArtistAlbums(id),
                apiArtist.getArtistTopTrack(id),
                apiArtist.getRelatedArtists(id),
            ]).then(data => {
                if (data[0].status === 'fulfilled') {
                    dispatch(setArtist({ artist: data[0].value }));
                }

                if (data[1].status === 'fulfilled') {
                    dispatch(setAlbums({ albums: data[1].value }));
                }

                if (data[2].status === 'fulfilled') {
                    dispatch(setTracks({ tracks: data[2].value }));
                }

                if (data[3].status === 'fulfilled') {
                    dispatch(setRelatedArtists({ relatedArtists: data[3].value }));
                }
                dispatch(setStatus({ status: EnumOfStatusFetching.Success }));
            });
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
