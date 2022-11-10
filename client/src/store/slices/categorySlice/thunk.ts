import { createAsyncThunk } from '@reduxjs/toolkit';
import { categoryAPI } from 'api/categoryApi';
import { RequestErrorType } from 'models/utilsTypes';
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
