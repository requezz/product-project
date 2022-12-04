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
import { Menu } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment } from 'react';
import cls from './Dropdown.module.scss';
export function Dropdown(props) {
    var className = props.className, items = props.items, trigger = props.trigger;
    return (_jsxs(Menu, __assign({ as: "div", className: classNames(cls.Dropdown, {}, [className]) }, { children: [_jsx(Menu.Button, __assign({ className: cls.btn }, { children: trigger })), _jsx(Menu.Items, __assign({ className: cls.menu }, { children: items.map(function (item) {
                    return (_jsx(Menu.Item, __assign({ as: Fragment, disabled: item.disabled }, { children: function (_a) {
                            var _b;
                            var active = _a.active;
                            return (_jsx("button", __assign({ type: "button", className: classNames(cls.item, (_b = {}, _b[cls.active] = active, _b)) }, { children: item.content })));
                        } })));
                }) }))] })));
}
