import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import axios from 'axios';
export var $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
    },
});
