import React from 'react'

function Keypad(){

    const password = () => {
        console.log('Entering password...')
    }

    return (
        <input type="password" onKeyUp={password} />
    )
}

export default Keypad 

