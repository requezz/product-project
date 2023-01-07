import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './Icon.module.scss';
export var Icon = memo(function (props) {
    var className = props.className, Svg = props.Svg, inverted = props.inverted;
    var t = useTranslation().t;
    return (_jsx(Svg, { className: classNames(inverted
            ? cls.inverted
            : cls.Icon, {}, [className]) }));
});
