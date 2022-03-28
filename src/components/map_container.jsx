
import React, { Component } from "react";
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoidGFyYW1hY3UiLCJhIjoiY2t6OGp6Z3QyMGEwcTJ1bzF6bnZjZmtjdyJ9.PGyURIG71drebfI-t81J4Q';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -70.9,
      lat: 42.35,
      zoom: 10
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


    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    const { lng, lat, zoom } = this.state;
    return (
      <div ref={this.mapContainer} className="map-container">
      </div>
    );
  }
}

export default MapContainer;
