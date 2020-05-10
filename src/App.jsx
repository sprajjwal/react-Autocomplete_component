import React from 'react';
import './App.css';

import Tree from './Tree';

const styles = {
  tree: {
    height: '100px',
    width: '100%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
function App() {
  const items = ['apple', 'adam', 'app', 'alan', 'airport', 'anthony']; // sample input
  function validator(input) {
    for (let i = 0; i < input.length; i += 1) {
      if (!isNaN(input[i])) {
        return false;
      }
    }
    return true;
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* Component takes callback */}
        <div style={styles.tree}>
          <Tree
            name="a"
            data={items}
            getInput={(prefix) => { console.log(prefix); }}
            validator={validator}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
