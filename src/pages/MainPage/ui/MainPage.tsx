import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { memo } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { HStack } from 'shared/ui/Stack';

const MainPage = memo(() => {
    const { t } = useTranslation();
    return (
        <div>
            <BugButton />
            <HStack>
                <ListBox
                    onChange={(value) => {}}
                    defaultValue="Выберите значение"
                    value={undefined}
                    items={[
                        { value: '1', content: '123' },
                        { value: '1', content: '123', disabled: true },
                        { value: '1', content: '123' },
                    ]}
                />
            </HStack>
            {t('Главная страница')}
        </div>
    );
});

export default MainPage;
