import React, { Component } from 'react';

class EyesOnMe extends Component {
    print = (arg) => {
        if(arg === "focus")
            console.log("Good!")
        else
            console.log("Hey! Eyes on me!")
    }
    render(){
        return(
            <button onFocus={()=>this.print("focus")} onBlur={()=>this.print("blur")} />
        )
    }
}
export default EyesOnMe;
