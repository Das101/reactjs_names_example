import React from 'react';
import './App.css'; // We will add styles in a separate CSS file

function App() {
  return (
    <div className="names-container">
      <div className="name">
        <h1>Name 1</h1>
      </div>
      <div className="names-parallel">
        <div className="name">
          <h1>Name 2</h1>
        </div>
        <div className="name">
          <h1>Name 3</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
