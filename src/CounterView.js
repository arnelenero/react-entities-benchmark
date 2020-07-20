import React, { useEffect, useState } from 'react';

import { useCounter } from './entities';

const iterations = 1000000;
let startTime = null;

const CounterView = () => {
  const [counter, { increment }] = useCounter();
  const [elapsed, setElapsed] = useState(null);

  useEffect(() => {
    startTime = Date.now();
    for (let i = 0; i < iterations; i++) {
      increment(1);
    }
  }, [increment]);

  useEffect(() => {
    if (counter.value === iterations) {
      setElapsed(Date.now() - startTime);
    }
  }, [counter]);

  return <>{elapsed !== null && <div>{elapsed}</div>}</>;
};

export default CounterView;
