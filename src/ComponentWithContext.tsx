import React from 'react';

export const ComponentWithContext: React.FunctionComponent<{}> = () => {
  const [state, dispatch] = React.useReducer((state: number, action: Action) => {
    switch (action) {
      case Action.INCREMENT:
        return state + 1;
      case Action.DECREMENT:
        return state - 1;
    }
  }, 0);

  return (
    <DispatchContext.Provider value={dispatch}>
      <ButtonComponent action={Action.INCREMENT}/>
      <ButtonComponent action={Action.DECREMENT}/>
      <p>
        value is {state}
      </p>
    </DispatchContext.Provider>
  );
};

const DispatchContext = React.createContext((action: Action) => {
});

enum Action {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

const ButtonComponent: React.FunctionComponent<{ action: Action }> = (props) => (
  <DispatchContext.Consumer>
    {(dispatch) => <button onClick={() => dispatch(props.action)}>{props.action}</button>}
  </DispatchContext.Consumer>
);
