var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Dropdown } from 'shared/ui/Popups';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { getUserAuthData, isUserAdmin, isUserManager, userActions, } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
export var AvatarDropdown = memo(function (props) {
    var className = props.className;
    var t = useTranslation().t;
    var dispatch = useDispatch();
    var isAdmin = useSelector(isUserAdmin);
    var isManager = useSelector(isUserManager);
    var authData = useSelector(getUserAuthData);
    var onLogout = useCallback(function () {
        dispatch(userActions.logout());
    }, [dispatch]);
    var isAdminPanelAvailable = isAdmin || isManager;
    if (!authData) {
        return null;
    }
    return (_jsx(Dropdown, { direction: "bottom left", className: classNames('', {}, [className]), items: __spreadArray(__spreadArray([], (isAdminPanelAvailable ? [{
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
        ], false), trigger: (_jsx(Avatar, { size: 30, src: authData.avatar })) }));
});
