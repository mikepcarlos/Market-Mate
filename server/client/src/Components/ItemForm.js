import React, { Component } from 'react';

class ItemForm extends Component {

  constructor(){
    super()

    this.state = {
      item: {
        title: "",
        quantity: "",
        priority: "",
        price: ""
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.postItem(this.state.item)
  }

  handleNewItemChange = (e) => {
    const safeNewItem = {
      ...this.state.item,
        [e.target.name]: e.target.value
    }

    this.setState({
      item: safeNewItem
    })
  }

  render(){
    return(
      <div className="item-form-container">
        <form onSubmit={this.handleSubmit} autoComplete="off" className="new-item-form">
          <br></br>
          <label>What is it?</label>
          <input onChange={this.handleNewItemChange} type="text" name="title" value={this.state.item.title}/>
          <br></br>
          <label>How many?</label>
          <input onChange={this.handleNewItemChange} type="text" name="quantity" value={this.state.item.quantity}/>
          <br></br>
          <label>How Important?</label>
          <input onChange={this.handleNewItemChange} type="text" name="priority" value={this.state.item.priority}/>
          <br></br>
          <label>How Much $$?</label>
          <input onChange={this.handleNewItemChange} type="text" name="price" value={this.state.item.price}/>
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
