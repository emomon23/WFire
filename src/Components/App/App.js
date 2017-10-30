import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css'; 
import MyNavBar from '../NavBar/ShapesNavBar'
import MyContainer from '../Container/Container'

class App extends Component {
  render() {
    return (
      <div>
         <MyNavBar/>
         <MyContainer />
      </div>
    );
  }
}

export default App;
