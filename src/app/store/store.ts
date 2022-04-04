import { configureStore } from '@reduxjs/toolkit';

import { searchReducer } from './Reducers/searchReducer';
import { collectionReducer } from './Reducers/collectionReducer';

export const store = configureStore({
    reducer: {
        [collectionReducer.name]: collectionReducer.reducer,
        [searchReducer.name]: searchReducer.reducer
    },
});

export type RootStateType = ReturnType<typeof store.getState>;