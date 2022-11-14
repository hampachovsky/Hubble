import { createAsyncThunk } from '@reduxjs/toolkit';
import { categoryAPI } from 'api/categoryApi';
import { ICategory } from 'models/types';
import { RequestErrorType } from 'models/utilsTypes';
import { setArticles, setLoadingStatus } from '../articlesSlice/articlesSlice';
import { ActionType } from './types';

export const fetchCategories = createAsyncThunk(
    ActionType.FETCH_CATEGORIES,
    async (_, thunkAPI) => {
        try {
            const response = await categoryAPI.getAll();
            return response;
        } catch (error) {
            const err = error as RequestErrorType;
            return thunkAPI.rejectWithValue(err.response?.data.error);
        }
    },
);

export const fetchArticlesByCategory = createAsyncThunk(
    ActionType.FETCH_ARTICLES_BY_CATEGORY,
    async (payload: ICategory, thunkAPI) => {
        try {
            await thunkAPI.dispatch(setLoadingStatus());
            const response = await categoryAPI.getById(payload);
            await thunkAPI.dispatch(setArticles(response.articles));
            return response;
        } catch (error) {
            const err = error as RequestErrorType;
            return thunkAPI.rejectWithValue(err.response?.data.error);
        }
    },
);
