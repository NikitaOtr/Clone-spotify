import { configureStore } from '@reduxjs/toolkit';

import { searchReducer } from './Reducers/searchReducer';

export const store = configureStore({
    reducer: {
        [searchReducer.name]: searchReducer.reducer
    },
});

export type RootStateType = ReturnType<typeof store.getState>;