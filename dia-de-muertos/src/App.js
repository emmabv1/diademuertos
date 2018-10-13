import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import axios from "axios";
import './App.css';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import User from './components/User';
import ShopList from './components/ShopList';
import {fetchSession} from './actions/authState-actions';

class App extends Component {
  state = {
    session: ""
  }

  // componentDidMount() {
  //   console.log(store.getState())
  // }
  

  render() {
    return (
      <div className="App">
        {/* <button onClick={this.logout}>Logout</button> */}
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
            path="/signup"
            render={() => <Signup/>}
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