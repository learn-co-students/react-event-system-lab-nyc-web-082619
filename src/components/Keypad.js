import React, { Component } from 'react';

class Keypad extends Component {
    print = () => {
        return console.log('Entering password...')
    }
    render(){
        return(
            <input onKeyUp = {this.print} type="password" />
        )
    }
}
export default Keypad;