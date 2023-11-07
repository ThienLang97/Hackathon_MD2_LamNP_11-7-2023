
import React, { useState } from 'react'
import './Form.css'


export default function Form() {
    const [countWord, setCountWord] = useState(0)
    const [countLetter, setCountLetter] = useState(0)
    const [countParagraph, setCountParagraph] = useState(0)
    const [textValue, setTextValue] = useState("")

    // onChange
    let changeValue = (e) => {
        let value = e.target.value
        setTextValue(value)

        // Đếm letter
        let letterValue1 = value.replace(/\n/g, "")
        let letterValue3 = letterValue1.trim()
        let letterValue2 = letterValue3.length
        setCountLetter(letterValue2)

        // Đếm word
        let wordValue1 = value.trim()
        let wordValue3 = wordValue1.split(" ")
        let wordValue2 = wordValue3.length
        setCountWord(wordValue2)

        // Đếm paragraph
        let paraValue1 = value.trim()
        let paraValue2 = paraValue1.split("\n").length
        setCountParagraph(paraValue2)
    }
    // Chuyển đổi thành chữ in hoa
    const toUpperCase = () => {
        const uppercaseValue = textValue.toUpperCase();
        setTextValue(uppercaseValue);
    }

    const toLowerCase = () => {
        const lowerCaseValue = textValue.toLowerCase();
        setTextValue(lowerCaseValue)
    }
    return (
        <div className='container'>
            <div className='formWord'>
                <h1>Word Counter</h1>
                <div className='counting'>
                    <div>
                        <p>Word</p>
                        <p>{countWord}</p>
                    </div>
                    <div>
                        <p>Letter</p>
                        <p>{countLetter}</p>
                    </div>
                    <div>
                        <p>Paragraph</p>
                        <p>{countParagraph}</p>
                    </div>
                </div>
                <textarea name="" id="" cols="30" rows="10" className='input' onChange={changeValue} value={textValue}></textarea>
            </div>
            <button onClick={toUpperCase}>UPPERCASE</button>
            <button onClick={toLowerCase}>LowerCase</button>
        </div>
    )
}