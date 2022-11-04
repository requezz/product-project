import { createContext } from 'react';

// #013e15
// #013b0b

export enum Theme {
    LIGHT = 'app_light_theme',
    DARK = 'app_dark_theme',
    GREEN = 'app_green_theme',
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
