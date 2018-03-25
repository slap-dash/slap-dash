import React, { Component } from 'react';

class Room extends Component {
  constructor(props) {
    super(props);
    this.temp = 'temp';
  }
  render() {
    return (
      <li>
        <div className="room">
          <div className="person person1">
            <img src="https://www.artistguitars.com.au/assets/full/12683.jpg" />
          </div>
          <div className="person person2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Shure_mikrofon_55S.jpg" />
          </div>
          <div className="person person3">
            <img src="https://usa.yamaha.com/files/drum_sets_1200x480_929f57203573f25ad6c6924da465211c.jpg" />
          </div>
          <div className="person person4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Shure_mikrofon_55S.jpg" />
          </div>
          <div className="person person5">
            <img src="https://www.artistguitars.com.au/assets/full/12683.jpg" />
          </div>
        </div>
        <h2>{this.props.room.name}</h2>
      </li>
    );
  }
}

export default Room;