import React from 'react';
import './App.css';
import Titlebar from './Titlebar';
import Business from './Business';

function App() {
  return (
    <div className="App">
      <Titlebar />
      <Business name="Schmidt's Poultry" summary="Raw chicken, soups, and salads" picloc="assets/rawchicken.jpg"/>
      <Business name="Kenny's Clothing" summary="Shirts, shoes, and pants" picloc="assets/kennycover.jpg"/>
    </div>
  );
}

export default App;
