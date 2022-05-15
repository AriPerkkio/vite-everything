import { useReducer } from 'react';

import styles from './Counter.module.scss';

function Counter(): JSX.Element {
    const [count, increase] = useReducer(reducer, 0);

    return (
        <button type='button' onClick={increase} className={styles.counter}>
            count is: {count}
        </button>
    );
}

export function reducer(count: number): number {
    return count + 1;
}

export default Counter;
