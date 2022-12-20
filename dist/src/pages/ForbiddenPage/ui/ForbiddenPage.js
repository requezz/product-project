import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
var ForbiddenPage = memo(function () {
    var t = useTranslation('').t;
    return (_jsx(Page, { children: t('У вас нет доступа к этой странице') }));
});
export default ForbiddenPage;
