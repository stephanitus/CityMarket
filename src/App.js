import React from 'react';
import './App.css';
import Titlebar from './Titlebar';
import Business from './Business';

function App() {
  return (
    <div className="App">
      <Titlebar />
      <div className="Body">
        <Business name="Schmidt's Poultry" summary="Raw chicken, soups, and salads" picloc="assets/rawchicken.jpg"/>
        <Business name="Kenny's Clothing" summary="Shirts, shoes, and pants" picloc="assets/kennycover.jpg"/>
        <Business name="Penny's Propane" summary="Grilling essentials" picloc="assets/propane.jpg"/>
        <Business name="Papa's Hardware" summary="Better than Lowe's" picloc="assets/hammer.jpg"/>
      </div>
    </div>
  );
}

export default App;
