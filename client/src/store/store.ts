import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice/userSlice';
import categoryReducer from './slices/categorySlice/categorySlice';
import articlesReducer from './slices/articlesSlice/articlesSlice';

const rootReducer = combineReducers({
    userReducer,
    categoryReducer,
    articlesReducer,
});

const setupStore = () =>
    configureStore({
        reducer: rootReducer,
        devTools: true,
    });

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
