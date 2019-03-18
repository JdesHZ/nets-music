import React, { Component } from 'react';
import './App.css';
import Header from './model/header'
import HeaderWrapper from './model/headerWrapper'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <HeaderWrapper></HeaderWrapper>
      </div>
    );
  }
}

export default App;
