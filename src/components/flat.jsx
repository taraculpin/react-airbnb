
import React, { Component } from "react";

class Flat extends Component {
  handleClick = (event) => {

  }

  render() {
    return (
      <div className="card" style={{backgroundImage: `url(${this.props.imageUrl})`}} onClick={this.handleClick}>
        <div className="card-description">
          {this.props.name}
        </div>
        <div className="card-category">
          {this.props.price} {this.props.priceCurrency}
        </div>
      </div>
    )
  }
}

export default Flat;
