import React from 'react';
import './App.css';

function Subject(props) {
  return (
    <div>
      <h1>Hi My Name is {props.myName} and I'm learning {props.subjectName} teach by {props.teacherName}</h1>
    </div>
  );
}

export default Subject;
