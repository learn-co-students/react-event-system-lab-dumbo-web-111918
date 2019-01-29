// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component{
  doThis = () => {
    console.log("Good!")
  }

  doThat = () => {
    console.log('Hey! Eyes on me!');
  }

  render(){
    return <button onFocus ={this.doThis} onBlur ={this.doThat}>Click Me!</button>
  }
}

export default EyesOnMe
