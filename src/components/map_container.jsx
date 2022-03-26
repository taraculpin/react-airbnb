
import React, { Component } from "react";

class MapContainer extends Component {
  constructor(props) {
    super(props);
      this.state = {
      lng: -70.9,
      lat: 42.35,
      zoom: 9
      };
    this.mapContainer = React.createRef();
    }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
    }

  render() {
    return (
      "This is the map container"
    )
  }
}

export default MapContainer;
