
import React, { Component } from "react";
import FlatList from "./flat_list";
import flats from "../../data/flats";
import MapContainer from "./map_container";

// const markers = flats.map(flat => [flat.lat, flat.lng])

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        flats: flats,
        selectedFlatId: flats[0].id
      }
  }
  selectedFlat = (id) => {
    this.setState({
      selectedFlatId: id
    });
  }

  render() {
    return (
      <div>
        <FlatList flats={this.state.flats} selectedFlat={this.selectedFlat} selectedFlatId={this.state.selectedFlatId}/>
        <MapContainer flats={this.state.flats} />
      </div>
    )
  }
}
export default App;
