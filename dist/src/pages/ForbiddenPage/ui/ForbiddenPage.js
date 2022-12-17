import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
var ForbiddenPage = memo(function () {
    var t = useTranslation('forbidden').t;
    return (_jsx(Page, { children: t('вававав') }));
});
export default ForbiddenPage;
