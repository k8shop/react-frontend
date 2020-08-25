import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './app.css';
import Products from '../products/products'
import Product from '../product/product'
import Header from '../header/header'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div id="app" className="App container-lg main_container">
          <Header />
          <Switch>
            <Route path="/product/:productId">
              <Product />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/">
              <Link to="/products">See Products!</Link>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
