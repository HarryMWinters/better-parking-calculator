import React from 'react';
import './App.css';
import Title from './components/title/title';
import Calculator from './components/calculator/calculator';
import ParkingMenu from './components/parking-menu/parking-menu';

const parkingInfo = {
  "Economy Parking": {
    "Per Hour": 2.00,
    "Daily Maximum": 9.00,
    "Per Week": 63.00,
  },
  "Short-Term Parking": {
    "Per Hour": 2.00,
    "Daily Maximum": 24.00,
    "Per Week": 168.00,
  },
  "Long-Term Surface Parking": {
    "Per Hour": 2.00,
    "Daily Maximum": 12.00,
    "Per Week": 84.00,
  },
  "Long-Term Garage Parking": {
    "Per Hour": 2.00,
    "Daily Maximum": 17.00,
    "Per Week": 119.00,
  },
  "Valet Parking": {
    "Per Hour": null,
     // Valet parking is only charged per day. 
    "Daily Maximum": 24.00,
    "Per Week": 169.00,
  },
}

function App() {
  return (  
    <div className="App">
      <Title/>
      <div className="Container">
        <Calculator/>
        <ParkingMenu parkingInfo={parkingInfo}/>
      </div>
    </div>
  );
}

export default App;
