import React, { Component } from 'react';
import './map.css';
import Menu from './Menu';
import Controls from './Controls';

class Map extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="map-container">
        <div className="map">
          <h1>Game Map</h1>
        </div>
        <Menu />
        
      </div>
     );
  }
}
 
export default Map;