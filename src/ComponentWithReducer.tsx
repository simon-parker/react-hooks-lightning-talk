import React, { useContext } from 'react';
import './App.css';

export const ComponentWithReducer: React.FunctionComponent<{}> = () => {
  const [state, dispatch] = React.useReducer((state: number, action: Action) => {
    switch (action) {
      case Action.INCREMENT:
        return state + 1;
      case Action.DECREMENT:
        return state - 1;
    }
  }, 0);

  return (
    <div>
      <button onClick={() => dispatch(Action.INCREMENT)}>increment</button>
      <button onClick={() => dispatch(Action.DECREMENT)}>decrement</button>
      <p>
        value is {state}
      </p>
    </div>
  );
};

enum Action {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT'
}
