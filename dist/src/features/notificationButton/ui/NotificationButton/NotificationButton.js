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
import { Button, ButtonType } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups';
import { memo, useCallback, useState } from 'react';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';
import { AnimationProvider } from 'shared/lib/components/AnymationProvider';
import cls from './NotificationButton.module.scss';
export var NotificationButton = memo(function (props) {
    var className = props.className;
    var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var onOpenDrawer = useCallback(function () {
        setIsOpen(true);
    }, []);
    var onCloseDrawer = useCallback(function () {
        setIsOpen(false);
    }, []);
    var trigger = (_jsx(Button, __assign({ onClick: onOpenDrawer, theme: ButtonType.CLEAR }, { children: _jsx(Icon, { Svg: NotificationIcon, inverted: true }) })));
    return (_jsxs("div", { children: [_jsx(BrowserView, { children: _jsx(Popover, __assign({ className: classNames(cls.NotificationButton, {}, [className]), direction: "bottom left", trigger: trigger }, { children: _jsx(NotificationList, { className: cls.notifications }) })) }), _jsxs(MobileView, { children: [trigger, _jsx(AnimationProvider, { children: _jsx(Drawer, __assign({ isOpen: isOpen, onClose: onCloseDrawer }, { children: _jsx(NotificationList, {}) })) })] })] }));
});
