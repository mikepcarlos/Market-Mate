import React, { Component } from 'react';

class ItemForm extends Component {

  constructor(){
    super()

    this.state = {
      title: "",
      quantity: "",
      priority: null,
      price: ""
    }
  }
  render(){
    return(
      <div>
        item form
      </div>
    )
  }
}

export default ItemForm
