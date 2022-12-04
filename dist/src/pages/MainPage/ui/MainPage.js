import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { memo } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { HStack } from 'shared/ui/Stack';
var MainPage = memo(function () {
    var t = useTranslation().t;
    return (_jsxs("div", { children: [_jsx(BugButton, {}), _jsx(HStack, { children: _jsx(ListBox, { onChange: function (value) { }, defaultValue: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435", value: undefined, items: [
                        { value: '1', content: '123' },
                        { value: '1', content: '123', disabled: true },
                        { value: '1', content: '123' },
                    ] }) }), t('Главная страница')] }));
});
export default MainPage;
