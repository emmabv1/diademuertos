import React, { Component } from 'react';
import './App.css';
import Signup from './components/Signup'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Dia de Muertos</h1>

          <Signup/>
      </div>
    );
  }
}

export default App;
