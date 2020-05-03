import React from 'react';
import './App.css';

import Tree from './Tree';

function App() {
  const items = ['apple', 'adam', 'app', 'alan', 'airport', 'anthony'];
  return (
    <div className="App">
      <header className="App-header">
        <Tree data={items} />
      </header>
    </div>
  );
}

export default App;
