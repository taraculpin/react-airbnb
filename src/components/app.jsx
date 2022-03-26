
import React, { Component } from "react";
import FlatList from "./flat_list";
import MapContainer from "./map_container";
import flats from "../../data/flats";
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoidGFyYW1hY3UiLCJhIjoiY2t6OGp6Z3QyMGEwcTJ1bzF6bnZjZmtjdyJ9.PGyURIG71drebfI-t81J4Q';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        flats: flats,
        mapbox: mapboxgl,
        token: mapboxgl.accessToken
      }
  }

  render() {
    return (
      <div>
        <FlatList flats={this.state.flats}/>
        <MapContainer mapbox={this.state.mapbox} token={this.state.token}/>
      </div>
    )
  }
}
export default App;
