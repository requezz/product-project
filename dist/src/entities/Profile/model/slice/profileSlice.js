import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined
};
export var profileSlice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {},
});
export var profileActions = profileSlice.actions;
export var profileReducer = profileSlice.reducer;
