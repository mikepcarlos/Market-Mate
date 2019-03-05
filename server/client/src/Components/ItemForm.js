import React, { Component } from 'react';

class ItemForm extends Component {

  constructor(){
    super()

    this.state = {
      title: "",
      quantity: null,
      priority: null,
      price: null
    }
  }

  handleSubmit = () => {
    console.log("test");
  }

  render(){
    return(
      <div className="item-form-container">
        <form onSubmit={this.handleSubmit} autoComplete="off" className="new-item-form">
          <label>What is it?</label>
          <input type="text" name="name" value=""/>
          <label>How many?</label>
          <input type="text" name="name" value=""/>
          <label>How Important?</label>
          <input type="text" name="name" value=""/>
          <label>How Much $$?</label>
          <input type="text" name="name" value=""/>
          <label>OR</label>
          <div className="camera-btn-container">
            <button type="button" className="camera-btn"></button>
          </div>
          <br></br>
          <div className="submit-item-container">
            <button type="Submit" className="submit-tem-button">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default ItemForm
