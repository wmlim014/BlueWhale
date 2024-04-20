// src/App.js
import React from 'react';
import Header from './reuseableComponent/header';

function App() {
  return (
    <div>
      <Header />
      <p>this is temporary body to test</p>
      {/* Other components will go here */}
    </div>
  );
}

export default App;
