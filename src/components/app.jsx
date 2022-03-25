
import React, { Component } from "react";
import FlatList from "./flat_list";
import MapContainer from "./map_container";

class App extends Component {
  render() {
    return (
      <div>
        <div className = "flat-list">
          <FlatList />
        </div>
        <div className = "map-container">
          <MapContainer />
        </div>
      </div>
    )
  }
}
export default App;
