var _a, _b;
import { jsx as _jsx } from "react/jsx-runtime";
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticleEditPage } from 'pages/ArticleEditPage';
import { AdminPanelPage } from 'pages/AdminPanelPage';
import { UserRole } from 'entities/User';
import { ForbiddenPage } from 'pages/ForbiddenPage';
export var AppRoutes;
(function (AppRoutes) {
    AppRoutes["MAIN"] = "main";
    AppRoutes["ABOUT"] = "about";
    AppRoutes["PROFILE"] = "profile";
    AppRoutes["ARTICLES"] = "articles";
    AppRoutes["ARTICLE_DETAILS"] = "article_details";
    AppRoutes["ARTICLE_CREATE"] = "article_create";
    AppRoutes["ARTICLE_EDIT"] = "article_edit";
    AppRoutes["ADMIN_PANEL"] = "admin_panel";
    AppRoutes["FORBIDDEN"] = "forbidden";
    // last
    AppRoutes["NOT_FOUND"] = "not_found";
})(AppRoutes || (AppRoutes = {}));
export var RoutePath = (_a = {},
    _a[AppRoutes.MAIN] = '/',
    _a[AppRoutes.ABOUT] = '/about',
    _a[AppRoutes.PROFILE] = '/profile/',
    _a[AppRoutes.ARTICLES] = '/articles',
    _a[AppRoutes.ARTICLE_DETAILS] = '/articles/',
    _a[AppRoutes.ARTICLE_CREATE] = '/articles/new',
    _a[AppRoutes.ARTICLE_EDIT] = '/articles/:id/edit',
    _a[AppRoutes.ADMIN_PANEL] = '/admin',
    _a[AppRoutes.FORBIDDEN] = '/forbidden',
    // последний
    _a[AppRoutes.NOT_FOUND] = '*',
    _a);
export var routeConfig = (_b = {},
    _b[AppRoutes.MAIN] = {
        path: RoutePath.main,
        element: _jsx(MainPage, {}),
    },
    _b[AppRoutes.ABOUT] = {
        path: RoutePath.about,
        element: _jsx(AboutPage, {}),
    },
    _b[AppRoutes.PROFILE] = {
        path: "".concat(RoutePath.profile, ":id"),
        element: _jsx(ProfilePage, {}),
        authOnly: true,
    },
    _b[AppRoutes.ARTICLES] = {
        path: RoutePath.articles,
        element: _jsx(ArticlesPage, {}),
        authOnly: true,
    },
    _b[AppRoutes.ARTICLE_DETAILS] = {
        path: "".concat(RoutePath.article_details, ":id"),
        element: _jsx(ArticleDetailsPage, {}),
        authOnly: true,
    },
    _b[AppRoutes.ARTICLE_CREATE] = {
        path: "".concat(RoutePath.article_create),
        element: _jsx(ArticleEditPage, {}),
        authOnly: true,
    },
    _b[AppRoutes.ARTICLE_EDIT] = {
        path: "".concat(RoutePath.article_edit),
        element: _jsx(ArticleEditPage, {}),
        authOnly: true,
    },
    _b[AppRoutes.ADMIN_PANEL] = {
        path: "".concat(RoutePath.admin_panel),
        element: _jsx(AdminPanelPage, {}),
        authOnly: true,
        roles: [UserRole.MANAGER, UserRole.ADMIN],
    },
    _b[AppRoutes.FORBIDDEN] = {
        path: "".concat(RoutePath.forbidden),
        element: _jsx(ForbiddenPage, {}),
    },
    // last
    _b[AppRoutes.NOT_FOUND] = {
        path: RoutePath.not_found,
        element: _jsx(NotFoundPage, {}),
    },
    _b);
