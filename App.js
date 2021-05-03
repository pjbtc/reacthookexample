import React, { Component } from 'react';
import Navbar from './Navbar';
import './App.css';
import SearchAppBar from './SearchAppBar';
import hookexample from './hookexample';
import Hookexamplenew from './Hookexamplenew';
import Nothookex from './Nothookex';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
        <h1>The responsive weather app with my own codes </h1>
        </div>
        <Navbar/>
        <Hookexamplenew/>
        <Nothookex/>
        <SearchAppBar/>
      
      </div>
    );
  }
}

export default App;
