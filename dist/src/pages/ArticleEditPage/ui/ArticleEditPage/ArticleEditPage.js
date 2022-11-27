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
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import { useParams } from 'react-router-dom';
import cls from './ArticleEditPage.module.scss';
var ArticleEditPage = memo(function (props) {
    var className = props.className;
    var t = useTranslation().t;
    var id = useParams().id;
    var isEdit = Boolean(id);
    return (_jsx(Page, __assign({ className: classNames(cls.ArticleEditPage, {}, [className]) }, { children: isEdit
            ? t("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438 \u0441 ID = ".concat(id))
            : t('Создание новой статьи') })));
});
export default ArticleEditPage;
