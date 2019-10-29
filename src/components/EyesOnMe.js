import React, { Component } from 'react'

class EyesOnMe extends React.Component {
    
    eFocus = () => {
        console.log('Good!')
    }
    eBlur = () => {
        console.log('Hey! Eyes on me!')
    }
    render(){
        return(
            <button onFocus={this.eFocus} onBlur={this.eBlur}></button>
        )
    }
}

export default EyesOnMe