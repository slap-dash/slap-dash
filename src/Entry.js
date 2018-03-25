import React, { Component } from 'react';

class Entry extends Component {
  render() {
    const logInSelection = {
      display: 'flex',
      justifyContent: 'center',
    };
    const choice = {
      cursor: 'pointer',
      width: '150px',
      height: '40px',
      margin: '50vh 15%',
    }

    return (
      <div style={logInSelection}>
        <button onClick={()=>{this.props.update('Jam')}} style={choice}>Jam</button>
        <button onClick={()=>{this.props.update('Watch')}} style={choice}>Watch</button>
      </div>
    );
  }
}

export default Entry;