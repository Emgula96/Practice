import React from 'react'
import { useState } from 'react'
import DisplayArea from './DisplayArea'
const InputField = () => {

    const [word, setWord] = useState('')
    let wordToCount = word
    console.log(word)

    const counterFunction = (word) => {
        
    }
    
    return (
    <>
            <input className='string-input' onChange={(e) => setWord(e.target.value)} placeholder='Enter your word'></input>
            <button className='Enter-btn'>Enter</button>
            <DisplayArea count={wordToCount} />
    </>
  )
}

export default InputField