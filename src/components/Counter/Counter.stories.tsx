import type { Meta } from '@storybook/react';

import Counter from './index';

export default {
    title: 'Counter',
    component: Counter,
} as Meta;

export function Basic() {
    return <Counter />;
}
