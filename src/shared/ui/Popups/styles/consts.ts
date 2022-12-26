import cls from './popup.module.scss';
import { DropdownDirection } from '../../../types/ui';

export const mapDirectionClass: Record<DropdownDirection, any> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top left': cls.optionsTopLeft,
    'top right': cls.optionsTopRight,
};
