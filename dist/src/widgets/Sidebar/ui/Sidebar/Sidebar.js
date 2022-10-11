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
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { Button, ButtonSize, ButtonType } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import cls from './Sidebar.module.scss';
export var Sidebar = function (_a) {
    var _b;
    var className = _a.className;
    var t = useTranslation().t;
    var _c = useState(false), collapsed = _c[0], setCollapsed = _c[1];
    var onToggle = function () {
        setCollapsed(function (prev) { return !prev; });
    };
    return (_jsxs("div", __assign({ "data-testid": "sidebar", className: classNames(cls.Sidebar, (_b = {}, _b[cls.collapsed] = collapsed, _b), [className]) }, { children: [_jsx(Button, __assign({ "data-testid": "sidebar-toggle", type: "button", onClick: onToggle, className: cls.collapseBtn, theme: ButtonType.BACKGROUND_INVERTED, size: ButtonSize.L, square: true }, { children: t(collapsed ? '>' : '<') })), _jsxs("div", __assign({ className: cls.items }, { children: [_jsxs(AppLink, __assign({ theme: AppLinkTheme.SECONDARY, to: RoutePath.main, className: cls.item }, { children: [_jsx(MainIcon, { className: cls.icon }), _jsx("span", __assign({ className: cls.link }, { children: t('Главная') }))] })), _jsxs(AppLink, __assign({ theme: AppLinkTheme.SECONDARY, to: RoutePath.about, className: cls.item }, { children: [_jsx(AboutIcon, { className: cls.icon }), _jsx("span", __assign({ className: cls.link }, { children: t('О сайте') }))] }))] })), _jsxs("div", __assign({ className: cls.switchers }, { children: [_jsx(ThemeSwitcher, {}), _jsx(LangSwitcher, { short: collapsed, className: cls.lang })] }))] })));
};
