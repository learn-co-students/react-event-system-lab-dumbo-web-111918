import React from 'react';
// Code EyesOnMe Component Here
class EyesOnMe extends React.Component {
    handleFocus = () => {
        console.log('Good!')
    }
    handleBlur = () =>{
        console.log('Hey! Eyes on me!')
    }
    render () {
        return (
            <button onFocus={this.handleFocus} onBlur={this.handleBlur} >
                Eyes On Me!
            </button>
        )
    }
}

export default EyesOnMe;