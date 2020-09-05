import React, { useState } from 'react';
import styles from './Register.module.css';
import firebase, { db, storage } from '../../../firebase/firebase'
import TextInput from './Inputs/TextInput';
import FileInput from './Inputs/FileInput';
import { useRegisterValidate } from '../../../hooks/useRegisterValidate'
import registerService from '../../../services/registerService'
import SubmitButton from './Inputs/SubmitButton';

const INIT_STATE = {
    email : '',
    password: "",
    repeatPassword:"",
    name:"",
    surname:"",
    nickname:"",
    telephone:"",
    city:"",
    country:"",
    description:"",
    file:[]
            }
interface IUser {
    email : string,
    password: string,
    repeatPassword: string,
    name: string,
    surname: string,
    nickname: string,
    telephone: string,
    city: string,
    country: string,
    description: string,
    file: any
}

export default function Register(props: any) {
    let {setAllow} = props
    //State of all user data from register input
    const [user, setUser] = useState<IUser>({...INIT_STATE});
    let { email, password, name, surname, nickname, telephone, city, country, description } = user

    //Returning all error messages from from validation and isValidate boolean
    const { errors, isValidate } = useRegisterValidate(user);
    //State of disabled button(in case of not pass validation)
    let [buttonDisabled, setButtonDisabled] = useState(true);
    //State of loading button(validation is ok, form is sending to firebase)
    let [buttonLoading, setButtonLoading] = useState(false)
    //State of createUserWithEmailAndPassword error message
    let [signUpErrorMessage, setSignUpErrorMessage] = useState<string>('')
    let [file, setFile] = useState<any>('')
    

    function handleChange(e : any) {
        setUser({...user, [e.target.name]: e.target.value})
        //switch on/off disabled button depended on isValidate return
        isValidate ? setButtonDisabled(false) : setButtonDisabled(true)
    }
    function handleFileChange(e : any) {
        setUser({...user, 'file': e.target.files[0].type})
        setFile(e.target.files[0])
        //switch on/off disabled button depended on isValidate return
        isValidate ? setButtonDisabled(false) : setButtonDisabled(true)
    }
    function handleSubmit(e : any) {
        e.preventDefault()
        //If form inputs are validated
        if(isValidate) {
            let newRegister = new registerService(user, file)
            newRegister.registerUser()
            newRegister.setUserPhotoInStorage().then(() => {
                setButtonLoading(false)
            })
            console.log("NEW", newRegister)
        //     //Turn on Loading Button
        //     setButtonLoading(true)
        //     //Create User
        //     firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        //     .then(() => {
        //         //Turn off Loading Button
        //         
        //         //Make sure that there can not be any error messages
        //         setSignUpErrorMessage('')
        //     }).catch((error) => {
        //         //Turn off Loading Button
        //         setButtonLoading(false)
        //         //Set signInErrorMessage
        //         setSignUpErrorMessage(error.message)

        //     })
        //     //Add user image to firebase storage
        //     storage.ref().child(`profiles/${user.email}.jpg`)
        //     .put(file)
        //     .then(() => {

        //     })
        //     .catch((error) => {

        //     })
        // } 
        // //Add user data to firestore
        // db.collection("users").add({
        //     email,
        //     password,
        //     name,
        //     surname,
        //     nickname,
        //     telephone,
        //     city,
        //     country,
        //     description})
        // .then(() => {
        //     console.log("Document successfully written!");
        // })
        // .catch((error) => {
        //     console.error("Error writing document: ", error);
        // });
    }}
    return <div className={styles.mainDiv}>
      <h1 className={styles.header}>REGISTER FORM</h1>
        <form className={styles.form}>
            {signUpErrorMessage && <h1>{signUpErrorMessage}</h1>}
            <TextInput 
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
                placeholder="ResetPassword" 
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
                name="nickname"/>
            <FileInput 
                error={errors.file} 
                handleFileChange={handleFileChange} 
                name="file" 
                file={file}/>
            <TextInput 
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
                name="country"/>
            <textarea  
                placeholder="opis" 
                name="description" 
                onChange={handleChange}/>
            <SubmitButton 
                buttonDisabled={buttonDisabled} 
                buttonLoading={buttonLoading} 
                placeholder="SUBMIT" 
                handleSubmit={handleSubmit} />
        </form>
    </div>
}