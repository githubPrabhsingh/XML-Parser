import React from 'react';
import XmlFileReader from './components/XmlFileReader';
import './App.css'; // Import your custom CSS file if you have one

  function App() {
    
  return (
    <div>
      <h1 className="app-title">XML FILE PARSER</h1>
    <div className="app-container">
      <div className="xml-file-reader-container">
        <XmlFileReader />
      </div>
    </div>
    </div>
  );
}

export default App;
