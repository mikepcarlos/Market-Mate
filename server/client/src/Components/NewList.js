import React, { Component } from 'react';
import ItemForm from './ItemForm'
import { Link } from 'react-router-dom';

class NewList extends Component {

  constructor(){
    super()

    this.state = {
      list: []
    }
  }

  postItem = (item) => {

    console.log("item - ", item);

  }

  render(){
    return(
      <div>
        New List
        <div className="add item">
          <ItemForm postItem={this.postItem}/>
        </div>
      </div>
    )
  }

};

export default NewList
