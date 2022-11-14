import { createAsyncThunk } from '@reduxjs/toolkit';
import { ChangeCommentLikeRequest, commentAPI, CommentRequestPayload } from 'api/commentAPI';
import { RequestErrorType } from 'models/utilsTypes';
import { updateArticle } from '../articlesSlice/articlesSlice';
import { ActionType } from './types';

export const fetchComments = createAsyncThunk(
    ActionType.FETCH_COMMENTS,
    async (articleId: string, thunkAPI) => {
        try {
            const response = await commentAPI.getByArticle(articleId);
            return response;
        } catch (error) {
            const err = error as RequestErrorType;
            return thunkAPI.rejectWithValue(err.response?.data.error);
        }
    },
);

export const fetchCreateComment = createAsyncThunk(
    ActionType.FETCH_CREATE_COMMENT,
    async (payload: CommentRequestPayload, thunkAPI) => {
        try {
            const response = await commentAPI.addComment(payload);
            await thunkAPI.dispatch(updateArticle(response));
            await thunkAPI.dispatch(fetchComments(response.id));
            return response;
        } catch (error) {
            const err = error as RequestErrorType;
            return thunkAPI.rejectWithValue(err.response?.data.error);
        }
    },
);

export const fetchChangeCommentLike = createAsyncThunk(
    ActionType.FETCH_CHANGE_COMMENT_LIKE,
    async (payload: ChangeCommentLikeRequest, thunkAPI) => {
        try {
            const response = await commentAPI.changeLike(payload);
            return response;
        } catch (error) {
            const err = error as RequestErrorType;
            return thunkAPI.rejectWithValue(err.response?.data.error);
        }
    },
);
