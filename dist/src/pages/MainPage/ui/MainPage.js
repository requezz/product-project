import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { memo } from 'react';
var MainPage = memo(function () {
    var t = useTranslation().t;
    return (_jsxs("div", { children: [_jsx(BugButton, {}), t('Главная страница')] }));
});
export default MainPage;
