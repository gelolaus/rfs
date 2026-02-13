import React from 'react';
import './App.css';
import Guestbook from './Guestbook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Personal Profile</h1>
      </header>
      <main>
        <Guestbook />
      </main>
    </div>
  );
}

export default App;
