import React, { Component } from 'react';
import Jam from './Jam.js';

class JamList extends Component {

  render() {
    const jams = {
      listStyleType: 'none',
      display: 'flex',
      flexWrap: 'wrap',
    };

    return (
      <div style={jams}>
        {this.props.rooms.map( (room) => {
          if (room.live  === true && room.people > 1) {
            return <Jam room= {room} />
          }
        })}
      </div>
    );
  }
}

export default JamList;
