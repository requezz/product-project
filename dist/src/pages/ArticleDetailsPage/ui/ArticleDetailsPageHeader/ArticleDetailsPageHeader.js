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
import { Button, ButtonType } from 'shared/ui/Button/Button';
import { memo, useCallback } from 'react';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article';
import { HStack } from 'shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/article';
export var ArticleDetailsPageHeader = memo(function (props) {
    var className = props.className;
    var t = useTranslation().t;
    var navigate = useNavigate();
    var article = useSelector(getArticleDetailsData);
    var canEdit = useSelector(getCanEditArticle);
    var onBackToList = useCallback(function () {
        navigate(RoutePath.articles);
    }, [navigate]);
    var onEditArticle = useCallback(function () {
        navigate("".concat(RoutePath.article_details).concat(article === null || article === void 0 ? void 0 : article.id, "/edit"));
    }, [article, navigate]);
    return (_jsxs(HStack, __assign({ max: true, justify: "between", className: classNames('', {}, [className]) }, { children: [_jsx(Button, __assign({ theme: ButtonType.OUTLINE, onClick: onBackToList }, { children: t('Назад к списку') })), canEdit && (_jsx(Button, __assign({ theme: ButtonType.OUTLINE, onClick: onEditArticle }, { children: t('Редактировать') })))] })));
});
