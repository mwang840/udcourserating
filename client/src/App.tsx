import React from 'react';
import { Button } from 'react-bootstrap';
import { EnterUniversity } from './components/EnterUniversity';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='bg'>
        <h1>
          Rate My Course
        </h1>
        <EnterUniversity></EnterUniversity>
        <Button>Login</Button>
        </div>
        
      </header>
      
    </div>
  );
}

export default App;
