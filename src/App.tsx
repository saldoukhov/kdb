import * as React from 'react';
import './App.css';

import Hello from "./components/Hello";

class App extends React.Component {
  public render() {
    return (
        <Hello name="TypeScript" enthusiasmLevel={10} />
    );
  }
}

export default App;
