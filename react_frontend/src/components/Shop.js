import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Shop extends Component {

  render() {
    return (
      <div>
        <h1>Shop</h1>
        <nav>
          <div><Link to="/products" className="link">Products</Link></div>
          <div><Link to="/user" className="link">User</Link></div>
          <div><Link to="/basket" className="link">Basket</Link></div>
          <div><Link to="/login" className="link">Login</Link></div>
        </nav>
      </div>
    )
  }
}

export default Shop;