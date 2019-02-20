import React, { Component } from 'react';
import Home from './Components/Home'
import { BrowserRouter, Route } from 'react-router-dom';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/home" component={Home}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
