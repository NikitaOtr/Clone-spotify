import { configureStore } from '@reduxjs/toolkit';

import { searchReducer } from './Reducers/searchReducer';
import { collectionReducer } from './Reducers/collectionReducer';
import { playlistReducer } from './Reducers/playlistReducer';
import { playerReducer } from './Reducers/playerReducer';
import { artistReducer } from './Reducers/artistReducer';
import { mainPageReducer } from './Reducers/mainPageReducer';

export const store = configureStore({
    reducer: {
        [mainPageReducer.name]: mainPageReducer.reducer,
        [playerReducer.name]: playerReducer.reducer,
        [playlistReducer.name]: playlistReducer.reducer,
        [collectionReducer.name]: collectionReducer.reducer,
        [searchReducer.name]: searchReducer.reducer,
        [artistReducer.name]: artistReducer.reducer,
    },
});

export type RootStateType = ReturnType<typeof store.getState>;