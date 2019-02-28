import React, { Component } from 'react';
import Home from './Components/Home'
import ListForm from './Components/ListForm'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/new_list" component={ListForm}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
