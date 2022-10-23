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
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonType } from './Button';
export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(Button, __assign({}, args)); };
export var Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};
export var Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonType.CLEAR,
};
export var ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Text',
    theme: ButtonType.CLEAR_INVERTED,
};
export var Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ButtonType.OUTLINE,
};
export var OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Text',
    theme: ButtonType.OUTLINE,
    size: ButtonSize.L,
};
export var OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'Text',
    theme: ButtonType.OUTLINE,
    size: ButtonSize.XL,
};
export var OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ButtonType.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
export var BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Text',
    theme: ButtonType.BACKGROUND,
};
export var BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Text',
    theme: ButtonType.BACKGROUND_INVERTED,
};
export var Square = Template.bind({});
Square.args = {
    children: '>',
    theme: ButtonType.BACKGROUND_INVERTED,
    square: true,
};
export var SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    theme: ButtonType.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
};
export var SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    theme: ButtonType.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
};
export var Disabled = Template.bind({});
Disabled.args = {
    children: '>',
    theme: ButtonType.OUTLINE,
    disabled: true,
};
