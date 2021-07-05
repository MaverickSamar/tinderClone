import React from 'react';
import './App.css';
import Header from "./Header.js";
import TinderCards from './TinderCards.js';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    //BEM naming convention
    <div className="app">
      <Header />

      <TinderCards />

      <SwipeButtons />

    </div>
  );
}

export default App;
