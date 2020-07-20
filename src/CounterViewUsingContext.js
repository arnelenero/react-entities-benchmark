import React, { useEffect, useState, useContext } from 'react';

import { CounterContext } from './context';

const iterations = 1000000;
let startTime = null;

const CounterViewUsingContext = () => {
  const { counter, dispatch } = useContext(CounterContext);
  const [elapsed, setElapsed] = useState(null);

  useEffect(() => {
    startTime = Date.now();
    for (let i = 0; i < iterations; i++) {
      dispatch({ type: 'increment' });
    }
  }, [dispatch]);

  useEffect(() => {
    if (counter.value === iterations) {
      setElapsed(Date.now() - startTime);
    }
  }, [counter]);

  return <>{elapsed !== null && <div>{elapsed}</div>}</>;
};

export default CounterViewUsingContext;
