/* global window, document */
import React, {Component} from 'react';
import {render} from 'react-dom';
import MapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

class Root extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 37.785164,
        longitude: -122.41669,
        zoom: 14,
        bearing: 0,
        pitch: 0
      }
    };
  }

  render() {

    const {viewport} = this.state;

    return (
      <MapGL
        {...viewport}
        width="100vw"
        height="100vh"
        mapStyle="https://hfu.github.io/macrostyle/style.json"
        onViewportChange={v => this.setState({viewport: v})}
        preventStyleDiffing={false} />
    );
  }

}

render(<Root />, document.body.appendChild(document.createElement('div')));
