
import React, { Component } from "react";
import FlatList from "./flat_list";
import flats from "../../data/flats";
import MapContainer from "./map_container";

const markers = flats.map(flat => [flat.lat, flat.lng])

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        flats: flats,
        markers: markers
      }
  }

  render() {
    return (
      <div>
        <FlatList flats={this.state.flats}/>
        <MapContainer markers={this.state.markers} />
      </div>
    )
  }
}
export default App;
