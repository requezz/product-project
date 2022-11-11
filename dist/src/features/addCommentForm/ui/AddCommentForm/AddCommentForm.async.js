import { lazy } from 'react';
export var AddCommentFormAsync = lazy(function () { return new Promise(function (resolve) {
    // @ts-ignore
    setTimeout(function () { return resolve(import('./AddCommentForm')); }, 1500);
}); });
