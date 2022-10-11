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
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';
export var LoginModal = function (_a) {
    var className = _a.className, isOpen = _a.isOpen, isClose = _a.isClose;
    return (_jsx(Modal, __assign({ className: classNames(cls.LoginForm, {}, [className]), isOpen: isOpen, onClose: isClose }, { children: _jsx(LoginForm, {}) })));
};
