import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App({
  // Use props for the following, as they generally will not change
  studentId = '101524575',
  studentName = 'Woohyuk (Harry) Song',
  college = 'George Brown College',
  location = 'Toronto',

  // Use props for the following, as they will change depending on the course / week
  title = 'Fullstack Web Development - 1',
  labTitle = 'React JS Programming',
  number = 'Week 09',
  labType = 'Lab Exercise'
}) {

  // Use state here
  const [courseTitle] = useState(title);
  const [labNumber] = useState(number);

  // JSX return for the app
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to {courseTitle}</h2>
        <h3>{labTitle} {labNumber} {labType}</h3>
        <h3>{studentId}</h3>
        <p>{studentName}</p>
        <p>College: {college}, {location}</p>
      </header>
    </div>
  );
}

// Export the app
export default App;
