import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { useState } from 'react';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            <BugButton />
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
