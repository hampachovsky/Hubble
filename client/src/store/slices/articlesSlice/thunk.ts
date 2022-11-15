import { createAsyncThunk } from '@reduxjs/toolkit';
import { articleAPI, ArticlePayloadType, ChangeLikeRequest } from 'api/articleAPI';
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

export const fetchCreateArticle = createAsyncThunk(
    ActionType.FETCH_ADD_ARTICLE,
    async (payload: ArticlePayloadType, thunkAPI) => {
        try {
            const response = await articleAPI.create(payload);
            return response;
        } catch (error) {
            const err = error as RequestErrorType;
            return thunkAPI.rejectWithValue(err.response?.data.error);
        }
    },
);

export const fetchOwnArticles = createAsyncThunk(
    ActionType.FETCH_OWN_ARTICLES,
    async (_, thunkAPI) => {
        try {
            const response = await articleAPI.getOwnArticles();
            return response;
        } catch (error) {
            const err = error as RequestErrorType;
            return thunkAPI.rejectWithValue(err.response?.data.error);
        }
    },
);

export const fetchLikedArticles = createAsyncThunk(
    ActionType.FETCH_LIKED_ARTICLES,
    async (_, thunkAPI) => {
        try {
            const response = await articleAPI.getLikedArticles();
            return response;
        } catch (error) {
            const err = error as RequestErrorType;
            return thunkAPI.rejectWithValue(err.response?.data.error);
        }
    },
);

export const fetchChangeLike = createAsyncThunk(
    ActionType.FETCH_CHANGE_LIKE,
    async (payload: ChangeLikeRequest, thunkAPI) => {
        try {
            const response = await articleAPI.changeLike(payload);
            return response;
        } catch (error) {
            const err = error as RequestErrorType;
            return thunkAPI.rejectWithValue(err.response?.data.error);
        }
    },
);
