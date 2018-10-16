import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import ShopList from './components/ShopList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <img className="logo" src="https://image.ibb.co/mhw2Kz/muertosapplogo.png" alt="muertosapplogo"/>
          <Route
            exact path="/"
            render={() => <Home/>}
          />
          <Route
            path="/login"
            render={() => <Login/>}
          />
          <Route
            path="/shoplist"
            render={() => <ShopList/>}
          />
      </div>
    );
  }
}

export default App;