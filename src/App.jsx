import React from 'react';
import './App.css';

import Tree from './Tree';


function App() {
  const items = ['apple', 'adam', 'app', 'alan', 'airport', 'anthony']; // sample input
  const validator = (input) => input != null; // validator function for component
  return (
    <div className="App">
      <header className="App-header">
        {/* Component takes callback */}
        <Tree
          name="a"
          data={items}
          getInput={(prefix) => { console.log(prefix); }}
          validator={validator}
        />
      </header>
    </div>
  );
}

export default App;
