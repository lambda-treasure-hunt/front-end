import React, { Component } from 'react';
import Pirate from '../Assets/pirate-293956.svg';
import './navbar.css'

class NavBar extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="navbar-container">
        <img className="logo" src={Pirate} alt="logo"/>
      </div>
     );
  }
}
 
export default NavBar;
