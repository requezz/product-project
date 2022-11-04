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
import { jsx as _jsx } from "react/jsx-runtime";
import { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
var AppRouter = function () {
    var isAuth = useSelector(getUserAuthData);
    var routes = useMemo(function () { return Object.values(routeConfig).filter(function (route) {
        if (route.authOnly && !isAuth) {
            return false;
        }
        return true;
    }); }, [isAuth]);
    return (_jsx(Routes, { children: routes.map(function (_a) {
            var element = _a.element, path = _a.path;
            return (_jsx(Route, { path: path, element: (_jsx(Suspense, __assign({ fallback: _jsx(PageLoader, {}) }, { children: _jsx("div", __assign({ className: "page-wrapper" }, { children: element })) }))) }, path));
        }) }));
};
export default memo(AppRouter);
