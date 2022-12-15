import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/Article';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getArticles } from '../../model/slices/articlesPageSlice';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView, } from '../../model/selectors/articlePageSelectors/articlePageSelectors';
export var ArticleInfiniteList = memo(function (props) {
    var className = props.className;
    var t = useTranslation().t;
    var articles = useSelector(getArticles.selectAll);
    var isLoading = useSelector(getArticlesPageIsLoading);
    var error = useSelector(getArticlesPageError);
    var view = useSelector(getArticlesPageView);
    if (error) {
        return (_jsx("div", { children: t('Ошибка при загрузке статей') }));
    }
    return (_jsx(ArticleList, { isLoading: isLoading, view: view, articles: articles, className: className }));
});
