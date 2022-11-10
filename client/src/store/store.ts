import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice/userSlice';
import categoryReducer from './slices/categorySlice/categorySlice';

const rootReducer = combineReducers({
    userReducer,
    categoryReducer,
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
