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
import { memo, Suspense, useCallback, } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';
var AppRouter = function () {
    var renderWithWrapper = useCallback(function (route) {
        var element = (_jsx(Suspense, __assign({ fallback: _jsx(PageLoader, {}) }, { children: _jsx("div", __assign({ className: "page-wrapper" }, { children: route.element })) })));
        return (_jsx(Route, { path: route.path, element: route.authOnly ? _jsx(RequireAuth, { children: element }) : element }, route.path));
    }, []);
    return (_jsx(Routes, { children: Object.values(routeConfig).map(renderWithWrapper) }));
};
export default memo(AppRouter);
