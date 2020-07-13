import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './form';
import Teamlist from './teamlist';

function App() {

  const [member, setMember] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        
        <Form member={member} setMember={setMember} />
        <div>List of Team Members</div>
        <Teamlist member={member} />
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
