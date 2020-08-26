import React from 'react';
import ListProduct from '../list_product/list_product'
import Client from '../../pkg/client/client'
import Button from 'react-bootstrap/Button';

import './products.css';

class Products extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      productName: ""
    };
    this.client = new Client();
    this.refresher = "";
  }
  componentDidMount() {
    this.refresher = setInterval(
       () => this.tick(),
       1000,
    );
  }
  handleChange = (e) => {
    this.setState({productName: e.target.value});
  }
  componentWillUnmount(){
    clearInterval(this.refresher)
  }
  tick = () => {
    this.client.GetProducts().then(response => response.json()).then(data =>
      this.setState({
        products: data
      })
    );
  }
  render() {
    return (
      <div className="Products">
        <div className="list row">
          {this.state.products.map((product, i) => (
            <ListProduct key={product.ID} product={product} />
          ))}
        </div>
        <div className="create-product row">
          <h2 className="col-12">Create Product</h2>
          <input type="text" value={this.state.productName} onChange={this.handleChange.bind(this)}/>
          <Button onClick={this.create.bind(this)}>Create</Button>
        </div>
      </div>
    );
  }
  create() {
    this.client.CreateProduct(this.state.productName);
    this.setState({productName: ""});
  }
}

export default Products;
