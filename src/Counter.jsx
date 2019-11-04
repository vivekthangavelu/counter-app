import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className="badge badge-primary p-2 ml-2">
          {this.props.product.value}
        </span>
        <button
          onClick={this.props.onIncreament}
          className="btn btn-primary m-2"
        >
          +
        </button>
        <button
          onClick={this.props.onDecreament}
          className="btn btn-secondary m-2"
        >
          -
        </button>
        <button onClick={this.props.onDelete} className="btn btn-danger">
          Remove
        </button>
      </div>
    );
  }
}

export default Counter;
