import React, { Component } from 'react';

class Entry extends Component {
  render() {
    const logInSelection = {
      display: 'flex',
      justifyContent: 'center'
    };
    const choice = {
      cursor: 'pointer',
      width: '150px',
      height: '40px',
      margin: '50vh 15%'
    }

    const jam = {
      position: 'absolute',
      height: '100%',
      width: '100%',
      backgroundColor: '#FFAB00',
      color: 'white',
      textAlign: 'left'
}

    const watch = {
      position: 'absolute',
      height: '100%',
      width: '100%',
      backgroundColor: '#3B202D',
      color: 'white',
      textAlign: 'right',
      clip: 'rect(0 50vw 100vh 0)'
}

    return (
      <div className="wrapper">
        <div className="jam" onClick={()=>{this.props.update('Jam')}}><p>Jam</p></div>
        <div className="watch" onClick={()=>{this.props.update('Watch')}}><p>Watch</p></div>
      </div>
    );
  }
}

export default Entry;
