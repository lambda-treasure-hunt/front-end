import React, { Component } from "react";
import "./menu.css";

class Controls extends Component {
  state = {};
  render() {
    return (
      <div className='controls'>
        <div
          style={{
            width: "150px",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "28px"
          }}
          className='controls-bar'
        >
          <h1>N</h1>
          <h1>S</h1>
          <h1>W</h1>
          <h1>E</h1>
        </div>
      </div>
    );
  }
}

export default Controls;
