import React from 'react';

import CounterView from './CounterView';
import CounterViewUsingContext from './CounterViewUsingContext';
import { CounterProvider } from './context';

const context = window.location.search === '?ctx';

function App() {
  return (
    <>
      {context ? (
        <CounterProvider>
          <CounterViewUsingContext />
        </CounterProvider>
      ) : (
        <CounterView />
      )}
    </>
  );
}

export default App;
