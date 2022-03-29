
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
    this.props.flats.forEach(flat => {
    const popup = new mapboxgl.Popup().setHTML(flat.name)

    const customMarker = document.createElement("div")
    customMarker.className = "marker"
    customMarker.style.backgroundImage = `url('https://www.svgrepo.com/show/22031/home-icon-silhouette.svg')`
    customMarker.style.backgroundSize = "contain"
    customMarker.style.width = "25px"
    customMarker.style.height = "25px"

    new mapboxgl.Marker(customMarker)
      .setLngLat([ flat.lng, flat.lat ])
      .setPopup(popup)
      .addTo(map)
    });
  }

  #fitMapToMarkers(map) {
    const bounds = new mapboxgl.LngLatBounds()
    this.props.flats.forEach(flat => bounds.extend([ flat.lng, flat.lat ]))
    map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 0 })
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
    this.#fitMapToMarkers(map);

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
