import React from 'react';
import { Button, Form, Grid, Header, Image, List, Modal, Icon, Message, Segment } from 'semantic-ui-react'


class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // not sure how to handle imgs (use a link?)
      instruments : [{name: guitar, img: ''}], // example of an instrument 
      image: ''
    }
   this.pickInstrument = this.pickInstrument.bind(this);
  }

  pickInstrument(instrumentName) {
     if (this.state.instruments.some(instrument => instrument['name'] === instrumentName) === false) {
        this.setState({
          instruments: [...instruments, {name: instrumentName, image: ''}]
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
    <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
    `}</style>
    return (
      <div className='login-form'>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h1' textAlign='center'>
                <div className="login-logo-name" > Jam Roulette </div>
           </Header>
            <Form size='large'>
              <Segment stacked>
                <input
                  placeholder='Pick Your Instrument'
                  ref={(input) => { this.pickInstrument(input); }}
                  className="login-input"
                />


              </Segment>
            </Form>
            <Message>
              <Modal size="tiny" trigger={<Button>Join a Room</Button>} closeIcon>
              <Modal.Header>Welcome to <span className="modal-logo"> Jam Roulette</span></Modal.Header>
              <Modal.Content>
                <Form>
                <Segment stacked>
                <input placeholder='Select a room name' ref={i => {this.room = i }} />
              </Segment>
                    <Modal size="mini" trigger={<Button type="submit" id="signUp" onClick={e => { this.joinRoom(this.room) }}>Let's get started</Button>}>
                       <Grid textAlign="center">
                       <Button color="green" style={{width: '100%'}}><Icon name="checkmark" />You're all set!</Button>
                       </Grid>
                    </Modal>
              </Form>
              </Modal.Content>
            </Modal>
            </Message>
          </Grid.Column>
        </Grid>
      </div>


    );
  }
}

export default Landing;

