var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useDispatch, useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AddCommentForm } from 'features/addCommentForm';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { ArticleDetailsPageHeader } from '../../ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { articleDetailsPageReducer } from '../../model/slices';
import { fetchArticleRecommendations, } from '../../model/services/fetchArticleReccomendations/fetchArticleRecommendations';
import { getArticleRecommendations, } from '../../model/slices/articleDetailsPageRecommendationsSlice';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { getArticleReccomendationsIsLoading } from '../../model/selectors/recommendations';
var reducers = {
    articleDetailsPage: articleDetailsPageReducer,
};
var ArticleDetailsPage = function (_a) {
    var className = _a.className;
    var t = useTranslation('article-details').t;
    var id = useParams().id;
    var comments = useSelector(getArticleComments.selectAll);
    var reccomendations = useSelector(getArticleRecommendations.selectAll);
    var commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    var reccomendationsIsLoading = useSelector(getArticleReccomendationsIsLoading);
    var dispatch = useDispatch();
    var onSendComment = useCallback(function (text) {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);
    useInitialEffect(function () {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });
    if (!id) {
        return (_jsx(Page, __assign({ className: classNames(cls.ArticleDetailsPage, {}, [className]) }, { children: t('Статья не найдена') })));
    }
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers, removeAfterUnmount: true }, { children: _jsx(Page, __assign({ className: classNames(cls.ArticleDetailsPage, {}, [className]) }, { children: _jsxs(VStack, __assign({ gap: "16", max: true }, { children: [_jsx(ArticleDetailsPageHeader, {}), _jsx(ArticleDetails, { id: id }), _jsx(Text, { size: TextSize.L, className: cls.commentTitle, title: t('Рекомендуем') }), _jsx(ArticleList, { articles: reccomendations, isLoading: reccomendationsIsLoading, className: cls.reccomendations, target: "_blank" }), _jsx(Text, { size: TextSize.L, className: cls.commentTitle, title: t('Комментарии') }), _jsx(AddCommentForm, { onSendComment: onSendComment }), _jsx(CommentList, { isLoading: commentsIsLoading, comments: comments })] })) })) })));
};
export default memo(ArticleDetailsPage);
