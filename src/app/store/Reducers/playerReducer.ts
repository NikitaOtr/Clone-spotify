import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITrack } from '../../types/commonTypes';
import { EnumOfStatusPlayer } from '../../types/playerTypes';

const initialState = {
    currentTrackIndex: 0,
    playlist: [] as Array<ITrack>,
    track: null as null | ITrack,
    saveVolume: 0.5,
    volume: 0.5,
    duration: 0,
    currentTime: 0,
    isPlaying: false,
    status: EnumOfStatusPlayer.Success,
};

export const playerReducer = createSlice({
    name: 'playerReducer',
    initialState,
    reducers: {
        togglePlaying(state) {
            state.isPlaying = !state.isPlaying;
        },

        setDuration(state, { payload }: PayloadAction<number>) {
            state.duration = payload;
        },

        setCurrentTime(state, { payload }: PayloadAction<number>) {
            state.currentTime = payload;
        },

        setVolume(state, { payload }: PayloadAction<number>) {
            state.volume = payload;
        },

        resetVolume(state) {
            state.saveVolume = state.volume;
            state.volume = 0;
        },

        setVolumeFromSaveVolume(state) {
            state.volume = state.saveVolume;
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

        setPlayerStatus(state, { payload }: PayloadAction<EnumOfStatusPlayer>) {
            state.status = payload;
        },
    },
});

export const playerReducerActions = playerReducer.actions;
