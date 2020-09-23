import React, { useState } from 'react';
import styles from './Register.module.css';
import TextInput from './Inputs/TextInput';
import FileInput from './Inputs/FileInput';
import registerService from '../../../services/registerService'
import SubmitButton from './Inputs/SubmitButton';
import { validate } from '../../../validates/registerFormValidation'
import { useFormValidation } from '../../../hooks/useFormValidation'

export default function Register() {
    const submitCallback = () => {
                    let newRegister = new registerService(values, file)
                    newRegister.registerUser()
                    // newRegister.setUserPhotoInStorage().then(() => {
                    // setButtonLoading(false)
            // })     
    }
    const {handleChange, handleSubmit, errors, values} = useFormValidation(submitCallback, validate)


    //State of disabled button(in case of not pass validation)
    let [buttonDisabled, setButtonDisabled] = useState(true);
    //State of loading button(validation is ok, form is sending to firebase)
    let [buttonLoading, setButtonLoading] = useState(false)
    //State of createUserWithEmailAndPassword error message
    let [signUpErrorMessage, setSignUpErrorMessage] = useState<string>('')
    let [file, setFile] = useState<any>('')
    
    return <div className={styles.mainDiv}>
      <h1 className={styles.header}>REGISTER FORM</h1>
        <form className={styles.form}>
            {signUpErrorMessage && <h1>{signUpErrorMessage}</h1>}
            {[{type:'email', name:"email", placeholder:"E-mail"},
            {type:'password', name:"password", placeholder:"Password"},
            {type:'password', name:"repeatPassword", placeholder:"Repeat Password"},
            {type:'text', name:"name", placeholder:"Name"},
            {type:'text', name:"surname", placeholder:"Surname"},
            {type:'text', name:"nickname", placeholder:"Nickaname"},
            {type:'text', name:"telephone", placeholder:"Telephone"},
            {type:'text', name:"city", placeholder:"City"},
            {type:'text', name:"country", placeholder:"Country"}].map((input: any) => {
                return <TextInput type={input.type} placeholder={input.placeholder} handleChange={handleChange} name={input.name} error={errors[input.name]} />
            })}
            {/* <TextInput 
                type="email" 
                placeholder="email" 
                handleChange={handleChange} 
                name="email"/>
            <TextInput 
                error={errors.password} 
                type="password" 
                placeholder="password" 
                handleChange={handleChange} 
                name="password"/>
            <TextInput 
                error={errors.repeatPassword} 
                placeholder="repeatPassword" 
                type="password" 
                handleChange={handleChange} 
                name="repeatPassword"/>
            <TextInput 
                error={errors.name} 
                placeholder="Name" 
                handleChange={handleChange} 
                name="name"/>
            <TextInput 
                error={errors.surname} 
                placeholder="Surname" 
                handleChange={handleChange} 
                name="surname"/>
            <TextInput 
                error={errors.nickname} 
                placeholder="Nickname" 
                handleChange={handleChange} 
                name="nickname"/> */}
            {/* <FileInput 
                error={errors.file} 
                handleFileChange={handleFileChange} 
                name="file" 
                file={file}/> */}
            {/* <TextInput 
                error={errors.telephone} 
                placeholder="Telephone" 
                handleChange={handleChange} 
                name="telephone"/>
            <TextInput 
                error={errors.city}
                placeholder="City" 
                handleChange={handleChange} 
                name="city"/>
            <TextInput 
                error={errors.country} 
                placeholder="Country" 
                handleChange={handleChange} 
                name="country"/> */}
            <textarea  
                placeholder="opis" 
                name="description" 
                onChange={handleChange}/>
            <SubmitButton 
                buttonDisabled={false} 
                buttonLoading={buttonLoading} 
                placeholder="SUBMIT" 
                handleSubmit={handleSubmit} />
        </form>
    </div>
}