import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Input } from 'shared/ui/Input/Input';
import { useState } from 'react';
var MainPage = function () {
    var t = useTranslation().t;
    var _a = useState(''), value = _a[0], setValue = _a[1];
    var onChange = function (val) {
        setValue(val);
    };
    return (_jsxs("div", { children: [_jsx(BugButton, {}), t('Главная страница'), _jsx(Input, {})] }));
};
export default MainPage;
