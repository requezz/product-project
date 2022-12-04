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
import { Button } from 'shared/ui/Button/Button';
import { Dropdown } from './Dropdown';
export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(Dropdown, __assign({}, args)); };
export var Normal = Template.bind({});
Normal.args = {
    trigger: _jsx(Button, { children: "Open" }),
    items: [
        {
            content: 'first',
        },
        {
            content: 'second',
        },
        {
            content: 'third',
        },
    ],
};
