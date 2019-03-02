import React from 'react';
import { Link } from 'react-router-dom';

const NewList = () => {

  return(
    <div>
      New List
      <div className="add item">
        <Link to='/new_item'>
          <button type="button">Add Item</button>
        </Link>
      </div>
    </div>
  )

};

export default NewList
