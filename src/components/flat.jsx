
import React, { Component } from "react";
import App from "./app";

class Flat extends Component {
  handleClick = (event) => {
    this.props.selectedFlat(this.props.flat.id)
  }

  render() {
    const { selectedFlat, selectedFlatId, flat: {id, imageUrl, name, priceCurrency, price}} = this.props;
    return (
      <div
        className={id === selectedFlatId ? "active card" : "card"}
        style={{backgroundImage: `url(${imageUrl})`}}
        onClick={this.handleClick}>
        <div className="card-description">
          {name}
        </div>
        <div className="card-category">
          {price} {priceCurrency}
        </div>
        <a className="card-link" href="#"></a>
      </div>
    )
  }
}

export default Flat;
