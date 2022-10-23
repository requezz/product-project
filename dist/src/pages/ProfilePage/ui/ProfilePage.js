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
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { DynamicModuleLoader } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from "entities/Profile";
var reducers = {
    profile: profileReducer
};
var ProfilePage = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    return (_jsx(DynamicModuleLoader, __assign({ reducers: true }, { children: _jsx("div", __assign({ className: classNames('', {}, [className]) }, { children: t('PROFILE PAGE') })) })));
});
export default ProfilePage;
