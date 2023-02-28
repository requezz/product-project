import type {
    StateSchema, ReduxStoreWithManager, ThunkConfig,
    StateSchemaKey, ThunkExtraArg,
} from './config/StateSchema';

import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';

export { createReducerManager } from './config/reducerManager';

export {
    StoreProvider,
    createReduxStore,
};

export type {
    StateSchema, AppDispatch, ReduxStoreWithManager, ThunkConfig,
    StateSchemaKey, ThunkExtraArg,
};
