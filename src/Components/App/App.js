import React from 'react';
import './App.scss';
import { Mouse, Entities, Upgrades } from "../";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Mouse />

        <div className="game-objects">
          <div className="game-objects__section">
            <Entities />
          </div>
          <div className="game-objects__section">
            <Upgrades />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
