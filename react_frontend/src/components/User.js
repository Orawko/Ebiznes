import React, {Component} from 'react';
import "../styles/user.css";
import mockedUser from "./mockedUser";
import FavouriteProducts from "./FavouriteProducts";
import OrderedProducts from "./OrderedProducts";
import Payments from "./Payments";

class User extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: mockedUser,
      userSettings: null,
      orders: null,
      payments: null,
      orderedProducts: [],
      favouriteProducts: [],
    }
  }

  componentDidMount() {
    this.getUserSettings(this.state.user.idSettings);
    this.getUserPayments(this.state.user.idUsers);
    this.getFavourites(this.state.user.idUsers);
    this.getOrders(this.state.user.idUsers);
  }

  getUserSettings(idSettings) {
    fetch(`http://localhost:9000/api/setting/${idSettings}`, {
        mode: 'cors',
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
      }
    )
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({userSettings: result});
        },
        (error) => {
          console.log(error)
        }
      )
  }

  getUserPayments(idUser) {
    fetch(`http://localhost:9000/api/userpayments/${idUser}`, {
        mode: 'cors',
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
      }
    )
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({payments: result});
        },
        (error) => {
          console.log(error)
        }
      )
  }

  getFavourites(idUser) {
    fetch(`http://localhost:9000/api/userfavourites/${idUser}`, {
        mode: 'cors',
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
      }
    )
      .then(res => res.json())
      .then(
        (result) => {
          result.forEach(favourite => this.getFavouriteProduct(favourite.idProducts, favourite.idFavourites));
        },
        (error) => {
          console.log(error)
        }
      )
  }

  getFavouriteProduct(idProduct, idFavourites) {
    fetch(`http://localhost:9000/api/product/${idProduct}`, {
        mode: 'cors',
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
      }
    )
      .then(res => res.json())
      .then(
        (result) => {
          this.addFavouriteProduct(result, idFavourites);
        },
        (error) => {
          console.log(error)
        }
      )
  }

  addFavouriteProduct(product, idFavourites) {
    let products = this.state.favouriteProducts;
    product.idFavourites = idFavourites;
    products.push(product);
    this.setState({favouriteProducts: products});
  }

  getOrders(idUser) {
    fetch(`http://localhost:9000/api/userorders/${idUser}`, {
        mode: 'cors',
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
      }
    )
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({orders: result});
          result.forEach(order => this.getOrderedProduct(order.idProducts));
        },
        (error) => {
          console.log(error)
        }
      )
  }

  getOrderedProduct(idProduct) {
    fetch(`http://localhost:9000/api/product/${idProduct}`, {
        mode: 'cors',
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
      }
    )
      .then(res => res.json())
      .then(
        (result) => {
          this.addOrderedProduct(result);

        },
        (error) => {
          console.log(error)
        }
      )
  }

  addOrderedProduct(product) {
    let products = this.state.orderedProducts;
    products.push(product);
    this.setState({orderedProducts: products});
  }

  render() {
    return (
      <div>
        <a href="http://localhost:3000/" className="back">Back</a>
        <div className="user">
          <h1>{this.state.user.email}</h1>
          <div>
            <h1>About me</h1>
            {this.state.userSettings ? this.state.userSettings.description : null}
          </div>
        </div>
        {this.state.favouriteProducts ? <FavouriteProducts favourites={this.state.favouriteProducts}/> : null}
        {this.state.orderedProducts ?
          <OrderedProducts ordered={this.state.orders} products={this.state.orderedProducts}/> : null}
        {this.state.payments ? <Payments payments={this.state.payments}/> : null}
      </div>
    )
  }
}

export default User;