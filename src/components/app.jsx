
import React, { Component } from "react";
import FlatList from "./flat_list";
import flats from "../../data/flats";
import MapContainer from "./map_container";

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        flats: flats,
      }
  }

  render() {
    return (
      <div>
        <FlatList flats={this.state.flats}/>
        <MapContainer />
      </div>
    )
  }
}
export default App;
