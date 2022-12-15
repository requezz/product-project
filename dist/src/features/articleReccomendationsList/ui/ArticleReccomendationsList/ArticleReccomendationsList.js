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
import { memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { useSelector } from 'react-redux';
import { getArticleRecommendations } from '../../model/slices/articleDetailsPageRecommendationsSlice';
import { getArticleReccomendationsIsLoading } from '../../../model/selectors/recommendations';
import cls from './ArticleReccomendationsList.module.scss';
export var ArticleReccomendationsList = memo(function (props) {
    var className = props.className;
    var t = useTranslation().t;
    var reccomendations = useSelector(getArticleRecommendations.selectAll);
    var reccomendationsIsLoading = useSelector(getArticleReccomendationsIsLoading);
    return (_jsxs("div", __assign({ className: classNames(cls.ArticleReccomendationsList, {}, [className]) }, { children: [_jsx(Text, { size: TextSize.L, className: cls.commentTitle, title: t('Рекомендуем') }), _jsx(ArticleList, { articles: reccomendations, isLoading: reccomendationsIsLoading, className: cls.reccomendations, target: "_blank" })] })));
});
