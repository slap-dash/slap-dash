import React from 'react';


class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instruments: [], // example of each obj in instruments array = {name: 'guitar', image: ''}
      image: '' // this can be a background or side image of some sort that could depend on which image the musician chooses
    }
   this.pickInstrument = this.pickInstrument.bind(this);
  }

  pickInstrument(instrumentName) {
     if (this.state.instruments.some(instrument => instrument['name'] === instrumentName) === false) {
       var obj = {name: instrumentName, image: ''}
        this.setState({
          instruments: [...this.state.instruments, obj]
      });
    }
      for (var i = 0; i < this.state.instruments; i++) {
        if (this.state.instruments[i] === instrumentName) {
          this.setState({image: this.state.instruments[i].image});
        }
      } 
      if (instrumentName === 'other') {
        this.setState({image: ''}); // just leaving this here for now
      }
  }

  joinRoom(room) {
    // nothing here yet and in fact will probably want to pass this down as props from App
  }


  render() {
  
    return (
      <div>
        <div class="grid" >
          <div class="segment">
            <h1 class="header" textAlign='center'>Jam Roulette</h1>
                <input
                  placeholder='Pick Your Instrument'
                  ref={(input) => { this.pickInstrument(input); }}
                />

           <button>Join a Room</button>
              <span>Welcome to <span className="Roulette-logo"> Jam Roulette</span></span>
                <div class="segment">
                <input placeholder='Select a room name' ref={i => {this.room = i }} />
              </div>
                    <button class="room" onClick={e => { this.joinRoom(this.room) }}>Let's get started</button>
            </div>
          </div>
        </div>

    );
  }
}

export default Landing;

