import React from 'react'
import './Form.css'
import InputField from './InputField'

function Form() {
  return (
    <div  className='formDiv'>
        <form action="">
            <InputField label={'Full Name'} type={'text'}/>
            <InputField label={'Age'} type={'number'}/>
            <InputField label={'Email ID'} type={'email'}/>
            <InputField label={'Phone number'} type={'number'} placeholder={'With country code'}/>

        </form>
    </div>
  )
}

export default Form