import { jsx as _jsx } from "react/jsx-runtime";
import { useSelector } from 'react-redux';
import { getUserAuthData, getUserRoles } from 'entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { useMemo } from 'react';
export function RequireAuth(_a) {
    var children = _a.children, roles = _a.roles;
    var auth = useSelector(getUserAuthData);
    var location = useLocation();
    var userRoles = useSelector(getUserRoles);
    var hasRequiredRoles = useMemo(function () {
        if (!roles) {
            return true;
        }
        return roles.some(function (requiredRole) {
            var hasRole = userRoles === null || userRoles === void 0 ? void 0 : userRoles.includes(requiredRole);
            return hasRole;
        });
    }, [roles, userRoles]);
    if (!auth || !hasRequiredRoles) {
        return _jsx(Navigate, { to: RoutePath.main, state: { from: location }, replace: true });
    }
    if (!hasRequiredRoles) {
        return _jsx(Navigate, { to: RoutePath.forbidden, state: { from: location }, replace: true });
    }
    return children;
}
