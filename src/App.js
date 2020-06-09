import React from 'react';
import './App.css';
import Subject from './subject';

function App() {
  return (
    <div className="App">
    <Subject/>
    <Subject myName="Awais karni" subjectName="Artificial Intelligence" />
    </div>
  );
}

export default App;
