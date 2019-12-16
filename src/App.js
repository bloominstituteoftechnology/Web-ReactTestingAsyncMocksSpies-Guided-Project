import React, { useState }  from 'react';
import logo from './logo.svg';
import './App.css';
import uuid from 'uuid'

jest.mock('uuid', () => {
  return () => 'hardcoded id'
});

// jest.mock('./helpers', () => {
//   return {
//     timestamp: () => 'same timestamp'
//   }
// })

export default function App() {
  const [count, setCount] = useState(0);

  const increaseCountSync = () => {
    setCount(count + 1);
  }

  const increaseCountAsync = () => {
    setTimeout(() => {
      setCount(count => count + 1);
    }, 200);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>the count is {count}</div>

        <div>this is random: {uuid()}</div>

        <button onClick={increaseCountSync}>increase sync</button>
        <button onClick={increaseCountAsync}>increase async</button>
      </header>
    </div>
  );
}
