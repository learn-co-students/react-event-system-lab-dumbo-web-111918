// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {
  passwordInput = () => console.log('Entering password...')
  render(){
    return(
      <h1><input type="password" onKeyUp={this.passwordInput}/>password</h1>
    )
  }
}

export default Keypad
