// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import ProjectList from './components/ProjectList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <ProjectList />
    </div>
  );
}

export default App;
