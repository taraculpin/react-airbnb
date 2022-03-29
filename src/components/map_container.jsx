
import React, { Component } from "react";
import mapboxgl from '!mapbox-gl';
import App from "./app";


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

  handleClick = (event) => {
    const id = parseInt(event.target.attributes.id.nodeValue)
    this.props.selectedFlat(id)
  }

  #addMarkersToMap(map) {
    this.props.flats.forEach(flat => {
    const popup = new mapboxgl.Popup().setHTML(flat.name)

    const customMarker = document.createElement("div")
    this.props.selectedFlatId === flat.id ? customMarker.className = "marker active" : customMarker.className = "marker"
    customMarker.style.backgroundImage = `url('https://www.svgrepo.com/show/22031/home-icon-silhouette.svg')`
    customMarker.style.backgroundSize = "contain"
    customMarker.style.width = "25px"
    customMarker.style.height = "25px"
    customMarker.id = flat.id
    customMarker.onclick = this.handleClick;

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

  // Adding the same code that;s in DidMount will make the highlighted marker update but also re-renders the entire map
  // componentDidUpdate() {
  // }

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
