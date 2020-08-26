class Client {
  GetProducts() {
    return fetch('http://api.bikepacker.local/products/')
  }
  GetProduct(id) {
    return fetch('http://api.bikepacker.local/products/' + id)
  }
  updateProduct(product) {
    let formData = new FormData();
    formData.append('price', product.price);
    formData.append('name', product.Name);

    return fetch("http://api.bikepacker.local/products/" + product.ID, {
      body: formData,
      method: "PUT"
    });
  }
  DeleteProduct(id) {
    return fetch("http://api.bikepacker.local/products/" + id, {method: "DELETE"})
  }
  CreateProduct(name) {
    let formData = new FormData();
    formData.append('name', name);

    return fetch("http://api.bikepacker.local/products/", {
      body: formData,
      method: "POST"
    });
  }
}

export default Client;
