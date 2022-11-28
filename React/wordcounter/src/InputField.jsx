import React from 'react'
import DisplayArea from './DisplayArea'
const InputField = () => {

    
    let count = { }
    return (
    <>
    <input classname='string-input' placeholder='Enter your word'></input>
            <button className='Enter-btn'>Enter</button>
            <DisplayArea count={count} />
    </>
  )
}

export default InputField