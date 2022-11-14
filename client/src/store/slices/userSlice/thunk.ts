import { createAsyncThunk } from '@reduxjs/toolkit';
import { authAPI } from 'api/authApi';
import { RequestErrorType, SignInPayload, SignUpPayload } from 'models/utilsTypes';
import { fetchArticles } from '../articlesSlice/thunk';
import { fetchCategories } from '../categorySlice/thunk';
import { ActionType } from './types';

export const fetchSignIn = createAsyncThunk(
    ActionType.FETCH_SIGN_IN,
    async (payload: SignInPayload, thunkAPI) => {
        try {
            const response = await authAPI.login(payload);
            window.localStorage.setItem('token', response.token);
            // TODO: HERE ADD FETCH ARTICLES FOR INSTANT LOAD
            return response.user;
        } catch (error) {
            const err = error as RequestErrorType;
            return thunkAPI.rejectWithValue(err.response?.data.error);
        }
    },
);

export const fetchSignUp = createAsyncThunk(
    ActionType.FETCH_SIGN_UP,
    async (payload: SignUpPayload, thunkAPI) => {
        try {
            const response = await authAPI.register(payload);
            return response;
        } catch (error) {
            const err = error as RequestErrorType;
            return thunkAPI.rejectWithValue(err.response?.data.error);
        }
    },
);

export const fetchUserData = createAsyncThunk(ActionType.FETCH_USER_DATA, async (_, thunkAPI) => {
    const response = await authAPI.authMe();
    await thunkAPI.dispatch(fetchArticles());
    await thunkAPI.dispatch(fetchCategories());
    return response;
});
