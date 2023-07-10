import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import examplesReducer from './examplesStore';
import linksReducer from './linksStore';

export const store = configureStore({
    reducer: {
        examples: examplesReducer,
        links: linksReducer
    },
});

setupListeners(store.dispatch);