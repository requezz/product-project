import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsPageRecommendationsReducer, } from '../../model/slices/articleDetailsPageRecommendationsSlice';
import { articleDetailsCommentsReducer } from '../../model/slices/articleDetailsCommentsSlice';
export var articleDetailsPageReducer = combineReducers({
    comments: articleDetailsCommentsReducer,
    recommendations: articleDetailsPageRecommendationsReducer,
});
