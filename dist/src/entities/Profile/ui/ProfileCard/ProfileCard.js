var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CurrencySelect } from 'entities/Currency';
import { CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';
import { VStack } from "shared/ui/Stack";
export var ProfileCard = function (props) {
    var _a, _b;
    var className = props.className, data = props.data, error = props.error, isLoading = props.isLoading, readonly = props.readonly, onChangeFirstname = props.onChangeFirstname, onChangeLastname = props.onChangeLastname, onChangeAge = props.onChangeAge, onChangeCity = props.onChangeCity, onChangeUsername = props.onChangeUsername, onChangeAvatar = props.onChangeAvatar, onChangeCurrency = props.onChangeCurrency, onChangeCountry = props.onChangeCountry;
    var t = useTranslation('profile').t;
    if (isLoading) {
        return (_jsx("div", __assign({ className: classNames(cls.ProfileCard, (_a = {}, _a[cls.loading] = true, _a), [className]) }, { children: _jsx(Loader, {}) })));
    }
    if (error) {
        return (_jsx("div", __assign({ className: classNames(cls.ProfileCard, {}, [className, cls.error]) }, { children: _jsx(Text, { theme: TextTheme.ERROR, title: t('Произошла ошибка при загрузке профиля'), text: t('Попробуйте обновить страницу'), align: TextAlign.CENTER }) })));
    }
    var mods = (_b = {},
        _b[cls.editing] = !readonly,
        _b);
    return (_jsxs(VStack, __assign({ max: true, gap: '8', className: classNames(cls.ProfileCard, mods, [className]) }, { children: [(data === null || data === void 0 ? void 0 : data.avatar) && (_jsx("div", __assign({ className: cls.avatarWrapper }, { children: _jsx(Avatar, { src: data === null || data === void 0 ? void 0 : data.avatar, alt: "" }) }))), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.first, placeholder: t('Ваше имя'), className: cls.input, readonly: readonly, onChange: onChangeFirstname }), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.lastname, placeholder: t('Ваша фамилия'), className: cls.input, readonly: readonly, onChange: onChangeLastname }), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.age, placeholder: t('Ваш возраст'), className: cls.input, readonly: readonly, onChange: onChangeAge }), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.city, placeholder: t('Город'), className: cls.input, readonly: readonly, onChange: onChangeCity }), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.username, placeholder: t('Введите имя пользователя'), className: cls.input, readonly: readonly, onChange: onChangeUsername }), _jsx(Input, { value: data === null || data === void 0 ? void 0 : data.avatar, placeholder: t('Введите ссылку на аватар'), className: cls.input, readonly: readonly, onChange: onChangeAvatar }), _jsx(CurrencySelect, { className: cls.input, value: data === null || data === void 0 ? void 0 : data.currency, onChange: onChangeCurrency, readonly: readonly }), _jsx(CountrySelect, { className: cls.input, value: data === null || data === void 0 ? void 0 : data.country, onChange: onChangeCountry, readonly: readonly })] })));
};
