import { createSlice } from '@reduxjs/toolkit';
var initialState = {};
export var articleReccomendationsListSlice = createSlice({
    name: 'articleReccomendationsList',
    initialState: initialState,
    reducers: {
        template: function (state, action) {
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});
export var articleReccomendationsListActions = articleReccomendationsListSlice.actions;
export var articleReccomendationsListReducer = articleReccomendationsListSlice.reducer;
