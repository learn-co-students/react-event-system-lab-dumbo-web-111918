// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component{
    theThing = () => {
      console.log("Entering password...")
    }

  render(){
    return <input onKeyUp={this.theThing} type="password" />
  }
}

export default Keypad
