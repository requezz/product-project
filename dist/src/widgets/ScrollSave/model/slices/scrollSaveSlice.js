import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    scroll: {},
};
export var scrollSaveSlice = createSlice({
    name: 'scrollSave',
    initialState: initialState,
    reducers: {
        setScrollPosition: function (state, _a) {
            var payload = _a.payload;
            state.scroll[payload.path] = payload.position;
        },
    },
});
export var scrollSaveActions = scrollSaveSlice.actions;
export var scrollSaveReducer = scrollSaveSlice.reducer;
