import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/app/App';

const message: string = 'Hello';
const recipient: string = 'World';

ReactDOM.render(
  <App 
  message={message} 
  recipient={recipient}/>, 
  document.querySelector('#root')
);