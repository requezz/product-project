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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { DynamicModuleLoader } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { Icon } from 'shared/ui/Icon/Icon';
import { HStack, VStack } from 'shared/ui/Stack';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { useInitialEffect } from '../../../../shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';
import EyeIcon from '../../../../shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '../../../../shared/assets/icons/calendar-20-20.svg';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading, } from '../../model/selectors/articleDetails';
import { ArticleBlockType } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
var reducers = {
    articleDetails: articleDetailsReducer,
};
export var ArticleDetails = memo(function (props) {
    var className = props.className, id = props.id;
    var t = useTranslation().t;
    var dispatch = useAppDispatch();
    var isLoading = useSelector(getArticleDetailsIsLoading);
    var article = useSelector(getArticleDetailsData);
    var error = useSelector(getArticleDetailsError);
    var renderBlock = useCallback(function (block) {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return (_jsx(ArticleCodeBlockComponent, { className: cls.block, block: block }, block.id));
            case ArticleBlockType.IMAGE:
                return (_jsx(ArticleImageBlockComponent, { className: cls.block, block: block }, block.id));
            case ArticleBlockType.TEXT:
                return (_jsx(ArticleTextBlockComponent, { className: cls.block, block: block }, block.id));
            default:
                return null;
        }
    }, []);
    useInitialEffect(function () {
        dispatch(fetchArticleById(id));
    });
    var content;
    if (isLoading) {
        content = (_jsxs(_Fragment, { children: [_jsx(Skeleton, { className: cls.avatar, width: 200, height: 200, border: "50%" }), _jsx(Skeleton, { className: cls.title, width: 300, height: 32 }), _jsx(Skeleton, { className: cls.skeleton, width: 600, height: 24 }), _jsx(Skeleton, { className: cls.skeleton, width: "100%", height: 200 }), _jsx(Skeleton, { className: cls.skeleton, width: "100%", height: 200 })] }));
    }
    else if (error) {
        content = (_jsx(Text, { align: TextAlign.CENTER, title: t('Произошла ошибка при загрузке статьи') }));
    }
    else {
        content = (_jsxs(_Fragment, { children: [_jsx(HStack, __assign({ justify: "center", max: true, className: cls.avatarWrapper }, { children: _jsx(Avatar, { size: 200, src: article === null || article === void 0 ? void 0 : article.img, className: cls.avatar }) })), _jsxs(VStack, __assign({ gap: "4", max: true }, { children: [_jsx(Text, { className: cls.title, title: article === null || article === void 0 ? void 0 : article.title, text: article === null || article === void 0 ? void 0 : article.subtitle, size: TextSize.L }), _jsxs(HStack, __assign({ gap: "8", className: cls.articleInfo }, { children: [_jsx(Icon, { className: cls.icon, Svg: EyeIcon }), _jsx(Text, { text: String(article === null || article === void 0 ? void 0 : article.views) })] })), _jsxs(HStack, __assign({ gap: "8", className: cls.articleInfo }, { children: [_jsx(Icon, { className: cls.icon, Svg: CalendarIcon }), _jsx(Text, { text: article === null || article === void 0 ? void 0 : article.createdAt })] }))] })), article === null || article === void 0 ? void 0 : article.blocks.map(renderBlock)] }));
    }
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers, removeAfterUnmount: true }, { children: _jsx(VStack, __assign({ gap: "16", className: classNames(cls.ArticleDetails, {}, [className]) }, { children: content })) })));
});
