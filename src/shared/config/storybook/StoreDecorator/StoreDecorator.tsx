import { Story } from '@storybook/react';
// import '@/app/styles/index.scss';
// eslint-disable-next-line requezz-dev/layer-imports
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { loginReducer } from '../../../../features/AuthByUsername/testing';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../../../entities/Article/testing';
import { addCommentFormReducer } from '../../../../features/addCommentForm/testing';
import { profileReducer } from '../../../../features/editableProfileCard/testing';
// eslint-disable-next-line requezz-dev/public-api-imports,requezz-dev/layer-imports
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
