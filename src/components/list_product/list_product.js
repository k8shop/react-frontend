import React from 'react';
import './list_product.css';
import Button from 'react-bootstrap/Button';
import Client from '../../pkg/client/client';
import {Link} from 'react-router-dom';

class ListProduct extends React.Component {
  constructor(){
    super();
    this.client = new Client();
    this.state = {};
  }
  render() {
    let href = "/product/" + this.props.product.ID
    return (
      <div className="Product col-sm-3">
        <span className="ProductName row"> product: {this.props.product.Name}</span>
        <Button className="row" onClick={this.delete.bind(this)}>Delete</Button>
        <Link to={href}>More details!!!</Link>
      </div>
    );
  }

  delete() {
    this.client.DeleteProduct(this.props.product.ID);
  }
}
export default ListProduct;
