
import React, { Component } from "react";
import mapboxgl from '!mapbox-gl';


class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 2.35,
      lat: 48.84,
      zoom: 11,
    };
    this.mapContainer = React.createRef();
  }

  #addMarkersToMap(map) {
    this.props.markers.forEach(marker => {
    // const popup = new mapboxgl.Popup().setHTML(marker.info_window)

    const customMarker = document.createElement("div")
    customMarker.className = "marker"
    customMarker.style.backgroundImage = `url('https://www.svgrepo.com/show/22031/home-icon-silhouette.svg')`
    customMarker.style.backgroundSize = "contain"
    customMarker.style.width = "25px"
    customMarker.style.height = "25px"

    new mapboxgl.Marker(customMarker)
      .setLngLat([ marker[1], marker[0] ])
      .addTo(map)
    });
  }

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoidGFyYW1hY3UiLCJhIjoiY2t6OGp6Z3QyMGEwcTJ1bzF6bnZjZmtjdyJ9.PGyURIG71drebfI-t81J4Q';
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
    this.#addMarkersToMap(map);

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
