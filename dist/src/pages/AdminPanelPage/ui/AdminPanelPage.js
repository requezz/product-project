import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
var AdminPanelPage = memo(function () {
    var t = useTranslation('admin-panel').t;
    return (_jsx(Page, { children: t('Админ панель') }));
});
export default AdminPanelPage;
