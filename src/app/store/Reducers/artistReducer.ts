import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StatusEnum } from '../../api/api';
import { apiArtist } from '../../api/apiArtist';
import { ISearchItem, ITrack } from '../../types/typeSearch';

const initialState = {
    status: StatusEnum.Success,
    artist: null as null | ISearchItem,
    relatedArtists: [] as Array<ISearchItem>,
    albums: [] as Array<ISearchItem>,
    tracks: [] as Array<ITrack>,
};

export const artistReducer = createSlice({
    name: 'artistReducer',
    initialState,
    reducers: {
        setStatus(state, { payload }: PayloadAction<{ status: StatusEnum }>) {
            state.status = payload.status;
        },
        setArtist(state, { payload }: PayloadAction<{ artist: ISearchItem }>) {
            state.artist = payload.artist;
        },
        setRelatedArtists(state, { payload } : PayloadAction<{relatedArtists: Array<ISearchItem>}>) {
            state.relatedArtists = payload.relatedArtists;
        },
        setAlbums(state, { payload }: PayloadAction<{ albums: Array<ISearchItem> }>) {
            state.albums = payload.albums;
        },
        setTracks(state, { payload }: PayloadAction<{ tracks: Array<ITrack>}>) {
            state.tracks = payload.tracks;
        }
    },
});

const { setStatus, setArtist, setRelatedArtists, setAlbums, setTracks } = artistReducer.actions;

export const fetchArtist = createAsyncThunk(
    'searchReducer/fetchArtist',
    async (id: string, { dispatch }) => {
        try {
            dispatch(setStatus({ status: StatusEnum.Loading }));
            const t = await apiArtist.getArtist(id);
            dispatch(setArtist({ artist: t }));

            const tt = await apiArtist.getArtistAlbums(id);
            dispatch(setAlbums({ albums: tt }));

            const ttt = await apiArtist.getArtistTopTrack(id);
            dispatch(setTracks({ tracks: ttt }));

            const tttt = await apiArtist.getRelatedArtists(id);
            dispatch(setRelatedArtists({ relatedArtists: tttt }));

            dispatch(setStatus({ status: StatusEnum.Success }));
        } catch(e) {
            dispatch(setStatus({ status: StatusEnum.Error }));
            console.error(e);
        }
    }
);
