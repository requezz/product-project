import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button/Button';

export const BugButton = () => {
    const { t } = useTranslation();
    const [error, setError] = useState(false);
    const onTrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        <Button type="button" onClick={onTrow}>
            {t('Throw Error')}
        </Button>
    );
};
