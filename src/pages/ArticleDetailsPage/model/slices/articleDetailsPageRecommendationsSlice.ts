import {
    createEntityAdapter,
    createSlice, PayloadAction,
} from '@reduxjs/toolkit';

import { Comment } from 'entities/Comment';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import {
    fetchArticleRecommendations,
} from 'pages/ArticleDetailsPage/model/services/fetchArticleReccomendations/fetchArticleRecommendations';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (comment) => comment.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState(),
);

const articleDetailsPageRecommendationsSlice = createSlice({
    name: 'articleDetailsPageRecommendationsSlice',
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (
                state,
                action,
            ) => {
                state.isLoading = false;
                recommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    reducer: articleDetailsPageRecommendationsReducer,
} = articleDetailsPageRecommendationsSlice;
