import React from 'react';

class Keypad extends React.Component {
  constructor() {
    super();
  }
  keyUpHandler(e) {
    console.log("Entering password...");
  }
  render() {
    return <input onKeyUp={this.keyUpHandler} type="password"/>;
  }
}

export default Keypad;
