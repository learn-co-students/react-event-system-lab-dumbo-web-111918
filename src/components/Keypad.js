import React from 'react'
// Code Keypad Component Here
class Keypad extends React.Component {

    handleKeyUp = (e)=>{
        console.log('Entering password...')
    }
    render() {
        return (
            <input type="password" name="password" onKeyUp={this.handleKeyUp} / >
        )
    }
}

export default Keypad;