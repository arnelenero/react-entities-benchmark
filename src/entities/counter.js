export const initialState = {
  value: 0,
};

export const increment = counter => by => {
  counter.setState({ value: counter.state.value + by });
};

export const decrement = counter => by => {
  counter.setState({ value: counter.state.value - by });
};
