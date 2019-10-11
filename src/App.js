import React, { useState }  from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setTimeout(() => {
      setCount(count + 1)
    },100)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>the count is {count}</div>
        <button onClick={increaseCount}>increase</button>
      </header>
    </div>
  );
}

export default App;
