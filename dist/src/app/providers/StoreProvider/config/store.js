import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
export function createConfigureStore(initialState) {
    var rootReducers = {
        counter: counterReducer,
        user: userReducer,
    };
    return configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
