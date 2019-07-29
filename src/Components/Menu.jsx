import React, { Component } from 'react';
import './menu.css';
import Controls from './Controls';

class Menu extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="menu-container">
        <div className="menu">
          <h1>Menu</h1>
        </div>
        <Controls />
      </div>
     );
  }
}
 
export default Menu;
