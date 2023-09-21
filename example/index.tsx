// import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Input } from '../src/index';

const App = () => {
  return (
    <div>
      <Input></Input>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
