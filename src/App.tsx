import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {env} from './contants/api.constant'

import Navbar from './components/navbar'

function App () {
  useEffect(() => {
    console.log(env);
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          {process.env.REACT_APP_ENVIROMENT}
        </p>
        <Navbar name= 'name' />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
