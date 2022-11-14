import { createAsyncThunk } from '@reduxjs/toolkit';
import { articleAPI } from 'api/articleAPI';
import { RequestErrorType } from 'models/utilsTypes';
import { ActionType } from './types';

export const fetchArticles = createAsyncThunk(ActionType.FETCH_ARTICLES, async (_, thunkAPI) => {
    try {
        const response = await articleAPI.getAll();
        return response;
    } catch (error) {
        const err = error as RequestErrorType;
        return thunkAPI.rejectWithValue(err.response?.data.error);
    }
});
