import React, { Component } from 'react';
import Room from './room.js';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.rooms = [{ name: 'cool room', instruments: ['vocal', 'string', 'percussion', 'any', 'any'] }, { name: 'boring room' }, { name: 'music room' }, { name: 'singing room' }, { name: 'no name' }];
  }
  render() {
    return (
      <ul className="grid">
        {this.rooms.map(room => <Room room={room} />)}
      </ul>
    );
  }
}

export default Grid;
