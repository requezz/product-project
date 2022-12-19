import { Story } from '@storybook/react';
import { Suspense } from 'react';

export const SuspenseDecorator = (StoreComponent: Story) => (
    <Suspense>
        <StoreComponent />
    </Suspense>
);
