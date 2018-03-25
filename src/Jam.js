import React, { Component } from 'react';

class Jam extends Component {

  render() {
    const jam = {
      width: '300px',
      height: '300px',
      background: 'grey',
      margin: '5px',
      position: 'relative',
    };

    return (
      <div style={jam}>
        <p>ROOM</p>
      </div>
    );
  }
}

export default Jam;
