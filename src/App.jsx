import React, { Component } from "react";
import Navbar from "./Navbar";
import Counters from "./Counters";
import Counter from "./Counter";
class App extends Component {
  state = {
    products: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncreament = product => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].value += 1;
    this.setState({ products });
  };
  handleDecreament = product => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].value -= 1;
    this.setState({ products });
  };
  handleDelete = product => {
    const { products } = this.state;
    const removedProducts = products.filter(p => p.id != product.id);
    this.setState({ products: removedProducts });
  };
  handleReset = () => {
    const { products } = this.state;
    const resettedProducts = products.map(product => ({
      id: product.id,
      value: 0
    }));
    this.setState({ products: resettedProducts });
  };
  totalCount = () => {
    const { products } = this.state;
    const filteredProducts = products.filter(product => product.value > 0);
    return filteredProducts.length;
  };
  render() {
    return (
      <React.Fragment>
        <Navbar totalCount={this.totalCount()} />
        <Counters
          products={this.state.products}
          onReset={this.handleReset}
          onIncreament={this.handleIncreament}
          onDecreament={this.handleDecreament}
          onDelete={this.handleDelete}
        />
      </React.Fragment>
    );
  }
}

export default App;
