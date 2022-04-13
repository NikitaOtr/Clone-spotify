import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITrack } from '../../types/typeSearch';

type StatusType = 'good' | 'error';

const initialState = {
    currentTrackIndex: 0,
    playlist: [] as Array<ITrack>,
    track: null as null | ITrack,
    volume: 0.5,
    duration: 0,
    currentTime: 0,
    isPlaying: false,
    status: 'good' as StatusType,

};

export const playerReducer = createSlice({
    name: 'playerReducer',
    initialState,
    reducers: {
        togglePlaying(state) {
            state.isPlaying = !state.isPlaying;
        },
        setDuration(state, { payload }: PayloadAction<{duration: number}>) {
            state.duration = payload.duration;
        },
        setCurrentTime(state, { payload }: PayloadAction<{currentTime: number}>) {
            state.currentTime = payload.currentTime;
        },
        setVolume(state, { payload }: PayloadAction<{volume: number}>) {
            state.duration = payload.volume;
        },
        setPlaylist(state, { payload }: PayloadAction<{playlist: Array<ITrack>, startIndex?: number}>) {
            state.playlist = payload.playlist;
            state.currentTrackIndex = payload.startIndex || 0;
            state.track = state.playlist[state.currentTrackIndex];
            state.isPlaying = true;
        },
        nextTrack(state) {
            state.currentTrackIndex = (state.currentTrackIndex + 1) % state.playlist.length;
            state.track = state.playlist[state.currentTrackIndex];
        },
        previousTrack(state) {
            state.currentTrackIndex = (state.currentTrackIndex + (state.playlist.length - 1)) % state.playlist.length;
            state.track = state.playlist[state.currentTrackIndex];
        },
        setPlayerStatus(state, { payload }: PayloadAction<{status: StatusType }>) {
            state.status = payload.status;
        }
    },
});

export const playerReducerActions = playerReducer.actions;
