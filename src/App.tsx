import React from 'react';
import { EnterUniversity } from './components/EnterUniversity';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Rate My Course
        </h1>
        <EnterUniversity></EnterUniversity>
      </header>
    </div>
  );
}

export default App;
