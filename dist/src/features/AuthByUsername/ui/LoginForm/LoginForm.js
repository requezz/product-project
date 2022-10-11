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
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';
export var LoginForm = function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    return (_jsxs("div", __assign({ className: classNames(cls.LoginForm, {}, [className]) }, { children: [_jsx(Input, { type: "text", className: cls.input }), _jsx(Input, { type: "text", className: cls.input }), _jsx(Button, __assign({ className: cls.loginBtn }, { children: t('Войти') }))] })));
};
