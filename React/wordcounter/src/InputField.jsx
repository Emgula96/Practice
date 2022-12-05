import React from 'react'
import { useState } from 'react'
import DisplayArea from './DisplayArea'
const InputField = () => {

    const [word, setWord] = useState('')
    let wordToCount = word
    console.log(word)
    bank = {}
    const counterFunction = (word) => {
        for (let i = 0; i < word.length; i++){
            const ch = string[i];
            bank[ch] = 0
        }
        bank[ch]++
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