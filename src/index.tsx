import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { ApiRequestWithEffects } from "./ClassComponentWithBug";

const Parent: React.FunctionComponent = () => {
  const [value, update] = useState(0);
  useEffect(() => {
   setTimeout(() => {
     update(value + 1)
   }, 2000)
  });

  if (value % 2 === 0) {
    return <div/>
  } else {
    // return <ClassComponentWithBug id={`${value}`}/>
    return <ApiRequestWithEffects id={`${value}`}/>
  }
};

ReactDOM.render(<Parent/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
