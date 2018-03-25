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

<<<<<<< HEAD
    return (
      <div style={logInSelection}>
        <button onClick={()=>{this.props.update('Jam')}} style={choice}>Jam</button>
        <button onClick={()=>{this.props.update('Watch')}} style={choice}>Watch</button>
=======
    const jam = {
      position: 'absolute',
      height: '100%',
      width: '100%',
      backgroundColor: '#FFAB00',
      color: 'white',
      textAlign: 'left',
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
      <div style={logInSelection}>
        <div className="jam" onClick={()=>{this.props.update('Jam')}}>Jam</div>
        <div className="watch" onClick={()=>{this.props.update('Watch')}}>Watch</div>
>>>>>>> f6c4d994738fdca6140d98a7a428f81cbcdb4723
      </div>
    );
  }
}

export default Entry;