import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import LightIcon from '@/shared/assets/icons/theme-dark.svg';
import DarkIcon from '@/shared/assets/icons/theme-light.svg';
import { Button, ButtonType } from '@/shared/ui/Button/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Theme } from '@/shared/const/theme';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonType.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
});
