import React, { Component } from 'react'

class Keypad extends React.Component {

    log = () => {
        console.log('Entering password...')
    }
    
    render(){
        return(
            <input type="password" onKeyUp={this.log}></input>
        )
    }
}

export default Keypad