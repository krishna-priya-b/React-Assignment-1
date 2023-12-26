import React from 'react'
import './InputField.css'

function InputField(props) {
  return (
    <div className='input-field'>
        <label>{props.label}</label>
        <input type={props.type} placeholder={props.placeholder}/>
    </div>
  )
}

export default InputField