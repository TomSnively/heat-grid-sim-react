import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Inputs from './Inputs';

class App extends Component {
  render() {
    return (
        <div className='container'>
            <Header />
            <Inputs />
            <h1>Hello React</h1>
        </div>
    );
  }
}

export default App;
