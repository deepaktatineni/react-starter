import * as React from 'react';
import '../../css/App.css'
import {Customers} from './customers'


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Hello from react starter</h1>
       <Customers />
      </header>
    </div>
  );
}

export default App;