import { describe, expect, test } from 'vitest';

import Counter, { reducer } from './Counter';

describe('<Counter />', () => {
    test('has displayName', () => {
        expect(Counter).toHaveProperty('displayName', 'Counter');
    });
});

describe('reducer', () => {
    test('is a function', () => {
        expect(reducer).toBeTypeOf('function');
    });

    test('increases count by one', () => {
        expect(reducer(1)).toBe(2);
        expect(reducer(2)).toBe(3);
        expect(reducer(3)).toBe(4);
    });
});
