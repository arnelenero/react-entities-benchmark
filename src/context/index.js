import React, { useReducer } from 'react';

let reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, value: state.value + 1 };
    case 'decrement':
      return { ...state, value: state.value - 1 };
    default:
      return;
  }
};

const initialState = { value: 0 };

export const CounterContext = React.createContext(initialState);

export function CounterProvider(props) {
  const [counter, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider value={{ counter, dispatch }}>
      {props.children}
    </CounterContext.Provider>
  );
}
