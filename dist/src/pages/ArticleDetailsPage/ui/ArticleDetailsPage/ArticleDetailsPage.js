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
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { ArticleRecommendationsList } from 'features/articleRecommendationsList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../../ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { articleDetailsPageReducer } from '../../model/slices';
import cls from './ArticleDetailsPage.module.scss';
var reducers = {
    articleDetailsPage: articleDetailsPageReducer,
};
var ArticleDetailsPage = function (_a) {
    var className = _a.className;
    var t = useTranslation('article-details').t;
    var id = useParams().id;
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers, removeAfterUnmount: true }, { children: _jsx(Page, __assign({ className: classNames(cls.ArticleDetailsPage, {}, [className]) }, { children: _jsxs(VStack, __assign({ gap: "16", max: true }, { children: [_jsx(ArticleDetailsPageHeader, {}), _jsx(ArticleDetails, { id: id }), _jsx(ArticleRecommendationsList, {}), _jsx(ArticleDetailsComments, { id: id })] })) })) })));
};
export default memo(ArticleDetailsPage);
