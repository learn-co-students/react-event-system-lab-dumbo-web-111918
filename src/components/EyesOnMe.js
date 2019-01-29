import React from 'react';

class EyesOnMe extends React.Component {
  constructor() {
    super();
  }
  focusHandler(e) {
    console.log("Good!");
  }
  blurHandler(e) {
    console.log("Hey! Eyes on me!");
  }
  render() {
    return <button onFocus={this.focusHandler} onBlur={this.blurHandler}>Enter</button>;
  }
}

export default EyesOnMe;
