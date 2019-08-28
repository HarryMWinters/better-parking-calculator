import React from 'react';
import './App.css';
import Title from './components/title/title';
import Calculator from './components/calculator/calculator';
import ParkingMenu from './components/parking-menu/parking-menu';

function App() {
  return (  
    <div className="App">
      <Title/>
      <div className="Container">
        <Calculator/>
        <ParkingMenu/>
      </div>
    </div>
  );
}

export default App;
