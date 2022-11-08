import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    status: null,
    error: null,
    isAuth: true,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers(builder) {},
});

export default userSlice.reducer;
