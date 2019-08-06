import React from 'react';

import CounterView from './CounterView';
import CounterViewUsingContext from './CounterViewUsingContext';
import { CounterProvider } from './context';

function App() {
  return (
    <>
      <CounterProvider>
        <CounterViewUsingContext />
      </CounterProvider>
    </>
  );
}

function AppB() {
  return <CounterView />;
}

export default App;
