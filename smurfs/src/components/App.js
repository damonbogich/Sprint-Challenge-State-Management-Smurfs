import React, { Component } from "react";
import "./App.css";
import SmurfForm from '../components/SmurfForm';

import Smurfs from './Smurfs';

function App() {
    return (
      <div className="App">
        <Smurfs/>
        <SmurfForm />
      </div>
    );
}

export default App;
