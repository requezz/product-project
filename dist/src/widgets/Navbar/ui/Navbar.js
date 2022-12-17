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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonType } from 'shared/ui/Button/Button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions, } from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './Navbar.module.scss';
export var Navbar = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var _b = useState(false), isAuthModal = _b[0], setIsAuthModal = _b[1];
    var authData = useSelector(getUserAuthData);
    var dispatch = useDispatch();
    var isAdmin = useSelector(isUserAdmin);
    var isManager = useSelector(isUserManager);
    var onCloseModal = useCallback(function () {
        setIsAuthModal(false);
    }, []);
    var onShowModal = useCallback(function () {
        setIsAuthModal(true);
    }, []);
    var onLogout = useCallback(function () {
        dispatch(userActions.logout());
    }, [dispatch]);
    var isAdminPanelAvailable = isAdmin || isManager;
    if (authData) {
        return (_jsxs("header", __assign({ className: classNames(cls.Navbar, {}, [className]) }, { children: [_jsx(Text, { theme: TextTheme.INVERTED, className: cls.appName, title: t('Ulbi TV App') }), _jsx(AppLink, __assign({ to: RoutePath.article_create, theme: AppLinkTheme.SECONDARY, className: cls.createLink }, { children: t('Создать статью') })), _jsx(Dropdown, { direction: "bottom left", className: cls.dropdown, items: __spreadArray(__spreadArray([], (isAdminPanelAvailable ? [{
                            content: t('Админка'),
                            href: RoutePath.admin_panel,
                        }] : []), true), [
                        {
                            content: t('Профиль'),
                            href: RoutePath.profile + authData.id,
                        },
                        {
                            content: t('Выйти'),
                            onClick: onLogout,
                        },
                    ], false), trigger: (_jsx(Avatar, { size: 30, src: authData.avatar })) })] })));
    }
    return (_jsxs("header", __assign({ className: classNames(cls.Navbar, {}, [className]) }, { children: [_jsx(Button, __assign({ theme: ButtonType.CLEAR_INVERTED, className: cls.links, onClick: onShowModal }, { children: t('Войти') })), isAuthModal && _jsx(LoginModal, { isOpen: isAuthModal, isClose: onCloseModal })] })));
});
