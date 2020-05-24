import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Shop from "./components/Shop";
import Products from "./components/Products";
import Basket from "./components/Basket";
import SiteNotFound from "./components/SiteNotFound";
import User from "./components/User";
import './styles/shop.css';

class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Shop}/>
            <Route path="/basket" component={Basket}/>
            {/*<Route path="/order" component={Order}/>*/}
            {/*<Route path="/orderDetails" component={OrderDetails}/>*/}
            {/*<Route path="/userOrders" component={UserOrders}/>*/}

            {/*<Route path="/adminPanel" component={AdminPanel}/>*/}
            {/*<Route path="/addProduct" component={AddProduct}/>*/}
            {/*<Route path="/addCategory" component={AddCategory}/>*/}
            {/*<Route path="/editProducts" component={EditProducts}/>*/}
            {/*<Route path="/editCategories" component={EditCategories}/>*/}
            {/*<Route path="/editOrders" component={EditOrders}/>*/}

            {/*<Route path="/DeleteProduct" component={DeleteProduct}/>*/}
            {/*<Route path="/DeleteCategory" component={DeleteCategory}/>*/}
            {/*<Route path="/DeleteOrder" component={DeleteOrder}/>*/}
            <Route path="/user" component={User}/>

            {/*<Route path="/product/:productId" component={Product}/>*/}
            <Route path="/products" component={Products}/>
            <Route path="*" component={SiteNotFound}/>
            {/*<Route path="/login" component={LoginHome}/>*/}
            {/*<Route path="/registration" component={Registration}/>*/}
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
