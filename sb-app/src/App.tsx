import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element="{<Home/>}"></Route>
          <Route path="/login" element="{<Login/>}"></Route>
          <Route path="/register" element="{<Register/>}"></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
