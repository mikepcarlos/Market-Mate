import React, { Component } from 'react';
import Home from './Components/Home'
import ItemForm from './Components/ItemForm'
import NewList from './Components/NewList'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/new_item" component={ItemForm}/>
            <Route exact path="/new_list" component={NewList}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
