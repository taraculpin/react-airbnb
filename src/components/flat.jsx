
import React, { Component } from "react";
import App from "./app";

class Flat extends Component {
  handleClick = (event) => {
    this.props.selectedFlat(this.props.id)
  }

  render() {
    return (
      <div
        className={ this.props.id === this.props.selectedFlatId ? "active card" : "card"}
        style={{backgroundImage: `url(${this.props.imageUrl})`}}
        onClick={this.handleClick}>
        <div className="card-description">
          {this.props.name}
        </div>
        <div className="card-category">
          {this.props.price} {this.props.priceCurrency}
        </div>
        <a className="card-link" href="#"></a>
      </div>
    )
  }
}

export default Flat;
