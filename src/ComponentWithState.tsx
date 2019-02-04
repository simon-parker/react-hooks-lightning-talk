import React from 'react';
import './App.css';

export const ComponentWithState: React.FunctionComponent<{}> = (props) => {
  const [value, increment] = React.useState(0);

  return (
    <div>
      <button onClick={() => increment(value + 1)}>increment</button>
      <p>
        value is {value}
      </p>
    </div>
  );
};
