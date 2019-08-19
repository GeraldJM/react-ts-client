import * as React from 'react';

import './App.css';

interface AppProps {
  message: string,
  recipient: string
}

const App = (props: AppProps) => (
  <div className="App-container">
    <h3>{props.message} {props.recipient}</h3>
  </div>
)

export default App;