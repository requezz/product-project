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
import { ListBox } from './ListBox';
export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        function (Story) { return _jsx("div", __assign({ style: { padding: 100 } }, { children: _jsx(Story, {}) })); },
    ],
};
var Template = function (args) { return _jsx(ListBox, __assign({}, args)); };
export var Normal = Template.bind({});
Normal.args = {
    value: '123',
    items: [
        {
            content: '123qwerty', value: '321',
        }, {
            content: 'fggfgfgf343', value: '45454',
        },
    ],
};
export var topLeft = Template.bind({});
topLeft.args = {
    direction: 'top left',
    value: '123',
    items: [
        {
            content: '123qwerty', value: '321',
        }, {
            content: 'fggfgfgf343', value: '45454',
        },
    ],
};
export var topRight = Template.bind({});
topRight.args = {
    direction: 'top right',
    value: '123',
    items: [
        {
            content: '123qwerty', value: '321',
        }, {
            content: 'fggfgfgf343', value: '45454',
        },
    ],
};
export var bottomLeft = Template.bind({});
bottomLeft.args = {
    direction: 'bottom left',
    value: '123',
    items: [
        {
            content: '123qwerty', value: '321',
        }, {
            content: 'fggfgfgf343', value: '45454',
        },
    ],
};
export var bottomRight = Template.bind({});
bottomRight.args = {
    direction: 'bottom right',
    value: '123',
    items: [
        {
            content: '123qwerty', value: '321',
        }, {
            content: 'fggfgfgf343', value: '45454',
        },
    ],
};
