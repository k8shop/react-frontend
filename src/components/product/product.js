import React from "react";
import { withRouter } from "react-router";
import Client from '../../pkg/client/client';
import Button from 'react-bootstrap/Button';

class Product extends React.Component {
  constructor(props){
    super(props);
    this.client = new Client();
    this.state = {
      product: {}
    };
  }

  componentDidMount() {
    this.client.GetProduct(this.props.match.params.productId).then(response => response.json()).then(data => {
      this.setState({
        product: data
      });
    });
  }

  update() {
    this.client.updateProduct(this.state.product)
  }
  handleChange = (e) => {
    const name = e.target.name;
    let stateProduct = this.state.product;
    stateProduct[name] = e.target.value;
    this.setState({product: stateProduct});
  }
  render() {
    return (
      <div className="Product row">
        <span className="col-6">name: </span><input className="col-6" name="Name" type="text" value={this.state.product.Name} onChange={this.handleChange}/>
        <span className="col-6">price: </span><input className="col-6" name="price" type="text" value={this.state.product.price} onChange={this.handleChange}/>
        <span className="col-6"></span><Button className="col-6" onClick={this.update.bind(this)}>Update</Button>
      </div>
    );
  }
}

export default withRouter(Product);
