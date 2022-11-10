import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryState } from 'models/types';
import { LoadingStatus } from 'models/utilsTypes';
import { fetchCategories } from './thunk';

const initialState: CategoryState = {
    categories: null,
    status: LoadingStatus.IDLE,
    error: null,
};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        resetCategoryState: (state) => {
            state.categories = null;
            state.status = LoadingStatus.IDLE;
            state.error = null;
        },
        setCategoryStatus: (state, action: PayloadAction<LoadingStatus>) => {
            state.status = action.payload;
        },
        setSuccess: (state) => {
            state.status = LoadingStatus.SUCCESS;
            state.error = null;
        },
        setLoadingStatus: (state) => {
            state.status = LoadingStatus.LOADING;
            state.error = null;
        },
        setErrorStatus: (state, error: unknown) => {
            state.status = LoadingStatus.ERORR;
            if (typeof error === 'string') {
                state.error = error;
            } else {
                state.error = 'unknown error';
            }
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchCategories.fulfilled, (state, { payload }) => {
            state.categories = payload;
            categorySlice.caseReducers.setSuccess(state);
        });
    },
});

export default categorySlice.reducer;

export const { setCategoryStatus, resetCategoryState } = categorySlice.actions;
