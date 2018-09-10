import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Dia de Muertos</h1>
          <Navbar/>

          <Route
            exact path="/"
            render={() => <Home/>}
          />

          <Route
            path="/login"
            render={() => <Login/>}
          />

          <Route
            path="/signup"
            render={() => <Signup/>}
          />
      </div>
    );
  }
}

export default App;
