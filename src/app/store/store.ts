import { configureStore } from '@reduxjs/toolkit';

import { searchReducer } from './Reducers/searchReducer';
import { collectionReducer } from './Reducers/collectionReducer';
import { playListReducer } from './Reducers/playlistReducer';
import { playerReducer } from './Reducers/playerReducer';
import { artistReducer } from './Reducers/artistReducer';

export const store = configureStore({
    reducer: {
        [playerReducer.name]: playerReducer.reducer,
        [playListReducer.name]: playListReducer.reducer,
        [collectionReducer.name]: collectionReducer.reducer,
        [searchReducer.name]: searchReducer.reducer,
        [artistReducer.name]: artistReducer.reducer,
    },
});

export type RootStateType = ReturnType<typeof store.getState>;