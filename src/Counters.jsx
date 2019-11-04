import React, { Component } from "react";
import Counter from "./Counter";
class Counters extends Component {
  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.props.onReset}
          className="btn btn-warning mt-2 ml-2"
        >
          Reset
        </button>
        {this.props.products.map(product => (
          <Counter
            key={product.id}
            product={product}
            onIncreament={() => this.props.onIncreament(product)}
            onDecreament={() => this.props.onDecreament(product)}
            onDelete={() => this.props.onDelete(product)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
