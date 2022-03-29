
import React, { Component } from "react";
import Flat from "./flat";

class FlatList extends Component {
  renderList = () => {
    return this.props.flats.map(flat => {
      return <Flat selectedFlatId={this.props.selectedFlatId} selectedFlat = {this.props.selectedFlat} id={flat.id} key={flat.id} name={flat.name} imageUrl={flat.imageUrl} price={flat.price} priceCurrency={flat.priceCurrency} lat={flat.lat} long={flat.long}/>
    })
  }

  render() {
    return (
      <div className="flat-list">
        {this.renderList()}
      </div>
    )
  }
}

export default FlatList;
