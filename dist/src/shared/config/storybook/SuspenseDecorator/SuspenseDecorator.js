import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from 'react';
export var SuspenseDecorator = function (StoreComponent) { return (_jsx(Suspense, { children: _jsx(StoreComponent, {}) })); };
